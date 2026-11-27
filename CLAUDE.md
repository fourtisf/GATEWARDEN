# CLAUDE.md — Gatewarden (Steam release project)

You are working on **Gatewarden**, a 2D action roguelite / tower-defense hybrid ("hordes from every side, one hero, hold the Gate").
The goal of this repository is to **ship the game on Steam** as a Windows desktop app (Linux/Steam Deck optional).

The game itself is finished and balanced (v0.7.0). Most remaining work is **release engineering**: real Steam IDs, a build, an upload, and polish requested by the owner.
Owner: ALFA (non-technical, communicates in Indonesian). Developer: Michael. Keep explanations to the owner short and in Indonesian when asked.

---

## ▶ START HERE — instructions for Claude Code
The owner wants a playable Windows build now, and a Steam release once the Steamworks account is approved.
Do these steps in order and report back to the owner **briefly, in Indonesian**:

1. **Put the project at the repo root** if it isn't already: `package.json` must sit at the root, next to `.github/`. Do not commit `node_modules/` or `dist/`.
2. Run `npm ci` (or `npm install` if there is no lockfile match) and `npm run check`. Four warnings about placeholder Steam IDs are **expected and OK**.
3. Optional but recommended: run `npx electron-builder --win --x64` once locally, to prove the build works in this environment. It works on Linux; no Wine is needed. Don't commit `dist/`.
4. **Commit and push to your current session branch.** The build workflow runs on every branch, so **you do not need a `main` branch**.
5. Report the result to the owner:
   - Give the Actions run URL if you can (`gh run list --branch <branch> --limit 1` or the GitHub UI). Otherwise tell them: "Buka tab Actions di repo GitHub → run 'Build desktop' terbaru → bagian Artifacts → download **Gatewarden-Windows** → ekstrak → jalankan Gatewarden.exe."
   - If you are allowed to push tags, push `v0.7.0`. The Release page then gets a direct `Gatewarden-Windows.zip` download.
6. **Steam IDs:** the owner gets these from partner.steamgames.com *after* paying the US$100 Steam Direct fee and finishing tax/bank/ID verification. Until then, leave the placeholders. Everything except the Steam upload works without them.
   When the owner sends you `AppID`, `Windows depot ID` and `studio name`:
   - Put the AppID in `steam.config.json`.
   - Replace `YOUR_APP_ID` and `YOUR_WINDOWS_DEPOT_ID` in `steam/*.vdf`.
   - Set `author`, `build.copyright` and `build.appId` (`com.<studio>.gatewarden`) in `package.json`.
   - Run `npm run check:release` (it must pass), then commit and push.
   - Then guide the owner through the "Before the first Steam upload" list below, and the secrets for `steam-deploy.yml`.
7. Do not change gameplay or balance unless the owner asks. If you touch `game/index.html`, run a headless smoke test first (see "Test hooks").

## Layout

```
main.js                 Electron main process: window, fullscreen, Steam init/overlay, save file, IPC bridge
preload.js              Exposes window.gwNative to the game (contextIsolation, sandboxed)
steam.config.json       { appId, enableSteam, requireSteam, achievementPrefix }
game/index.html         THE GAME — one self-contained HTML file (canvas + DOM HUD + WebAudio), ~2.8k lines
game/fonts/             Bundled Outfit + Silkscreen woff2 (SIL OFL 1.1) — the game must run offline
build/icon.png          1024×1024 app icon (electron-builder converts it to .ico/.icns)
steam/                  SteamPipe scripts (app_build.vdf, depot_*.vdf), achievements.json/.csv, achievement icons
store/                  Draft Steam store assets: screenshots (1920×1080) and capsules in every required size
scripts/check.js        Pre-build checks (offline, achievements ↔ icons, placeholder IDs)
scripts/upload-steam.*  Build + SteamCMD upload
docs/LAUNCH_CHECKLIST.md  Step-by-step Steam launch plan (Indonesian, for the owner)
store/STORE_PAGE.md     Store page copy (English), tags, system requirements, AI disclosure draft
web/gatewarden-web.html Browser build of the same game (Google Fonts, localStorage) for demos / itch.io
```

## Commands

```bash
npm install            # Electron 45, electron-builder 26, steamworks.js 0.4
npm start              # run the desktop app (dev mode: devtools on F12, "Unlock all" test button visible)
npm run check          # sanity checks (warnings for placeholder IDs)
npm run check:release  # strict: fails until real AppID/depots/studio name are set
npm run dist:win       # -> dist/win-unpacked/Gatewarden.exe   (works on Windows; also on Linux, verified)
npm run dist:linux     # -> dist/linux-unpacked/gatewarden
STEAM_USER=xxx ./scripts/upload-steam.sh   # or scripts\upload-steam.bat on Windows
```

Steam builds use the electron-builder **`dir` target** (an unpacked folder). Steam installs that folder directly, so no installer and no code signing are needed.

## Verified so far (by the previous session)
- `npm install`, `electron-builder --linux` and `--win` both succeed. `steamworks.js` native files (win64/linux64) are in `app.asar.unpacked`.
- The packaged app runs (tested headless with Xvfb). In release mode `gwNative.dev === false`, which hides the "Unlock all" test button.
- Saves go to `<userData>/save/gatewarden-save.json` with an atomic write.
- Without a running Steam client, `steamworks.init` throws. The error is caught and the game runs normally (expected).
- The game loads with bundled fonts and makes no network requests.

## Before the first Steam upload — TODO
1. **Real IDs**:
   - Put the Steam AppID in `steam.config.json` (`appId`).
   - Replace `YOUR_APP_ID` and `YOUR_WINDOWS_DEPOT_ID` in `steam/app_build.vdf` and `steam/depot_windows.vdf`. Do the same for Linux if shipping Linux.
   - Set `author`, `build.copyright` and `build.appId` in `package.json`.
   - Then run `npm run check:release`.
2. **Steamworks partner site** (owner does it or gives you the values):
   - **Stats & Achievements:** create the 21 achievements exactly as in `steam/achievements.csv`. The API name must be `GW_<ID>`. Upload `steam/achievement_icons/*.jpg` (achieved + `_locked`). Publish.
   - **Steam Cloud (Auto-Cloud):** byte quota 10 MB, 10 files. Root `WinAppDataRoaming`, subdirectory `Gatewarden/save`, pattern `*.json`. Linux root: `LinuxXdgConfigHome`, subdirectory `Gatewarden/save`.
   - **Installation > General > Launch options:** Windows executable `Gatewarden.exe`. Linux (optional) executable `gatewarden`.
   - **Depots:** one Windows depot (all languages, Windows OS). Optional Linux depot.
3. Build, upload (`scripts/upload-steam.*`), and set the build live on the `default` branch.
4. Test through the Steam client:
   - The overlay opens (Shift+Tab).
   - Achievements pop.
   - Cloud save syncs between two PCs.
   - A gamepad works.
   - Alt+Enter / F11 toggles fullscreen.
5. Optional: set `requireSteam: true` in `steam.config.json` for release builds. A copied exe then relaunches through Steam (`restartAppIfNecessary`).

## CI (GitHub Actions)
- `.github/workflows/build.yml` runs on **every push to any branch** (including `claude/*` session branches), on PRs, on manual dispatch and on `v*` tags.
  - It builds Windows and uploads `dist/win-unpacked` as the artifact **Gatewarden-Windows**, kept 30 days.
  - A `v*` tag also publishes a GitHub Release with `Gatewarden-Windows.zip` attached: a permanent public download link.
  - Linux builds only on manual dispatch or tags.
- `.github/workflows/steam-deploy.yml` (manual `workflow_dispatch`):
  - Runs `check:release`, builds Windows and uploads it to Steam with `game-ci/steam-deploy@v3`.
  - Needs the repo secrets `STEAM_USERNAME`, `STEAM_CONFIG_VDF` and `STEAM_APP_ID`.
  - The depot is assumed to be AppID+1.
  - It **fails on purpose** until the real Steam IDs are filled in.

## Steam integration — how it works
- `main.js` calls `steamworks.init(appId)` and then `steamworks.electronEnableSteamOverlay()`. Both happen **before** `app.whenReady()`, because the overlay needs Chromium switches applied at startup.
- `preload.js` exposes `window.gwNative`:
  `{dev, steam, version, player, loadSave(), writeSave(str), achieve(id), toggleFullscreen(), setFullscreen(v), quit()}`.
- In the game, `NATIVE = window.gwNative || null` and `DEV = NATIVE ? NATIVE.dev : true`:
  - `loadP()` and `saveP()` use NATIVE when it is present, otherwise localStorage.
  - `unlockAch(id)` calls `NATIVE.achieve(id)`, which maps to Steam API name `GW_` + `id.toUpperCase()`.
  - On boot, every locally unlocked achievement is re-sent to Steam. This is idempotent and catches achievements earned offline.
  - The QUIT button appears only when NATIVE is present.
  - The "Test mode: unlock all" button appears only when `DEV` is true.
- Window blur auto-pauses the battle, which also covers the Steam overlay opening.

**Overlay troubleshooting** (a known Electron caveat): the overlay only appears when the game is launched **from the Steam client**. If it still doesn't render, try Electron's `--in-process-gpu` switch (steamworks.js sets it). As a last resort, pin Electron to an older major that the steamworks.js community has confirmed.

## Game architecture (game/index.html)
A single IIFE, no build step. Edit it directly; it is the source of truth. Approximate line map:

| Section | What |
|---|---|
| ~336 `data` | `UNIT/UDEF` (recruitable army), `ED` (enemies & bosses), `HEROES`, `CARDS`, `EVOS`, `RELICS`, `MAPS`, `PERM` (Sanctum), `ACH`, `SKILLS`, `POOL`, `ASC`, `DAILY_MODS`, `QUEST_T`, difficulty curves `hpMult/atkMult` |
| ~549 `persistent save` | `P` object, `SAVE_KEY='gatewarden.save.v1'`, `defaultP()`, deep-merge `loadP()`. **Never break the save shape**: add new fields to `defaultP()` only. |
| ~560 `run state` | `S` (current run), helpers `hs()` (hero stats), `abilCd/abilInfo`, costs |
| ~620 `audio` | `AU` (synth SFX), `TRACKS` / `MUS` (procedural music sequencer) |
| ~684 `drawing` | Vector sprites: `drawHero`, `drawEnemy` (cached into sprite sheets at boot) |
| ~1145 `hero` | `tryAttack(src)` (wind-up) → `doStrike()` (damage); `ATK_T` timings, `heroPose()` animation curve, `drawSmear()` |
| ~1365 `skills` | `castAbility(k)` with keys `q`, `e`, `shock` (R ultimate), `f` (pool skill picked at level 5); `castSkill(id)` |
| ~1477 `combat` | `hitEnemy`, `killEnemy` (rewards, combos, splits), `damageAlly`, `coreDamage` |
| ~1551 `spawning` | `spawnPool(wave)`, `spawnTick` (+ mid-wave events: treasure goblin / ambush / elite) |
| ~1598 `bosses` | telegraphs (`tele`), bullets, `bossAI` patterns (`slam/ring/charge/rain/radial/blink/summon`) |
| ~1706 `battle update` | units, wolves, fires, meteors, ultimates, enemies, separation, projectiles |
| ~1972 `render` | everything drawn on the 1600×900 canvas (stage is CSS-scaled to the window) |
| ~2238 `progression` | level-up cards, evolutions, chests/relics |
| ~2310 `meta` | achievements, shards, hero mastery, bounties, daily challenge, ascension unlocks |
| ~2398 `flow` | `startWave / endWave / openShop / gameOver / newRun / continueRun` |
| ~2496 `menus` | title (+ Daily & Bounties side panel), hero select (mastery, skins, ascension), Sanctum, achievements, settings, pause |
| ~2665 `input` / `gamepad` / `loop` | keyboard/mouse (`doAct` dispatcher for `data-act` buttons), gamepad polling + menu focus navigation, fixed-step loop |

**Test hooks:** `window.__G` exposes `S, P, F, newRun, startWave, endWave, castAbility, spawnEnemy, update, render, …`. Two flags matter:
- `__G.TEST.auto = true` turns on the bot autopilot.
- `__G.TEST.turbo = 45` runs 45 simulation steps per frame with no rendering. That gives very fast headless balance runs, about 15 s for a full 20-wave run in Chromium/Playwright.

Keep these hooks: they power balance testing. DevTools are disabled in packaged builds.

**Pacing changes (after v0.7.0, owner request "game feels boring"):**
- Each run starts with a "Starting Power" pick: 3 weapon cards (`S.pending=1` in `newRun`, `lv===1` branch in `openLevelUp`).
- Waves 1–4 spawn more enemies (`EARLY_A/EARLY_B` in the spawn rate, bigger opening pack) and enemy types arrive about one wave earlier (`basePool`).
- Waves 3+ get a random theme (`THEMES`, `pickTheme`) that boosts one enemy type; maps bias the pool (`MAPS[k].bias`).
- Mid-wave events start at wave 1; waves 6+ get a second event at 80%.
- All three maps are unlocked from the start, in the Steam build and the web demo (owner request).
- Daily Challenge and Bounties panels on the title screen show only in the desktop (Steam) build (`sideHTML` returns '' without `NATIVE`).
- Bot sims (random card picks, buys every shop offer, no Sanctum): median end wave 10 before and after these changes.

**Open world (owner request):**
- The world is `WW`×`WH` (3200×1800) with the Gate at its centre. `CAM` follows the hero (`updateCam`); `render()` draws everything in world space under a camera transform, then HUD layers in screen space.
- The stage fills the window: `fit()` sets the view width `VW` (1200–2400) from the window aspect ratio; the height is always 900.
- Enemies spawn on a ring around the Gate (`SPX`/`SPY` in `edgePoint`), not at the world edge, so travel time stays close to the old arena.
- `buildBG` paints the whole world once per map, including `scenery()` (trees, ruins, pools, crystals, lava…). `MINI` is a downscaled copy used by `drawMini()` (minimap top-right + an arrow to the Gate when it is off screen).
- Mouse position is stored in screen space (`F.mouse.sx/sy`) and converted to world space every frame.
- Music on/off: `P.settings.musicOn`, `toggleMusic()`, HUD button `#musicBtn`, title button, key M.

**Skills (owner request):** `SK_POW=1.25` and `SK_CD=0.8` make every skill and ultimate 25% stronger with 20% shorter cooldowns; `castFX()` adds the cast burst, shake and a brief colour flash. Bot sims after this: median end wave 11.

**World content (owner request "make it fun for hours"):**
- `scenery()` now builds y-sorted sprites (`SCN`) with circle colliders (`OBST`, `pushOut`) and records pools (`POOLS`, `inPool`). Pools: Moonlit Ruins heals the hero, Frozen Pass gives +30% speed (`F.onIce`), Hellforge lava burns the hero and ground enemies. Flying enemies and bosses ignore obstacles.
- Per wave (`spawnWorld`): 2 shrines (`SHRINES`: fury, haste, mend, fortune; buffs in `F.buff`, applied in `hs()`), from wave 3 an enemy nest (`ED.nest`, `nestAI`; killing it cuts the spawn rate by 20% for the wave), and a 40% chance of a far "lost chest" that vanishes at wave end.
- New cards: Corpse Blast, Frostbite, Echo Strike, Gate Sentinel, Glass Cannon, plus one hero-only card each (`hc`, `hr`, `ha`, `hw`, gated by `req`).
- Story: one-time intro (`showIntro`, `P.intro`) and boss quotes (`BOSS_LINE`).
- Bot sims after this (Captain, Moonlit Ruins, 8 runs): end waves 12–20, one win. Other hero/map pairs: 8–18.
- Not done: recorded audio (all sound is still synthesised).

**v0.8.0 additions:**
- Unlockable cards: `UNLOCKS` (9 cards gated by lifetime stats or hero mastery, stored in `P.unl`), checked in `unlockHTML()` on every end screen and listed under "Card collection" on the Achievements screen. `pickCards` skips locked cards. Bot sims must set `P.unl` to compare balance.
- First-time tips (`P.tips`): shrine banner in wave 1, one toast per map pool. How to Play has a row about the minimap, shrines, nests and pools.
- `spawnPoint()` re-rolls spawn points until one is off screen (purple rift effect if none is).
- Touch controls (`TOUCH`, `initTouch`, `touchAuto`, `drawTouch`): left-side drag = joystick (writes `PAD.mx/my`), auto-attack on the nearest enemy, skill buttons tap to cast. `?touch` in the URL forces touch mode for testing. Menus are still desktop-sized, so phones are playable but small.
- Fixed: armed (targeted) skills cast at screen coordinates instead of world coordinates after the open-world change.
- `store/screenshots/*.png` were regenerated from this build (drafts made with the bot, not hand-picked).

**Retention systems (owner request "reasons to keep playing"):**
- Warden Rank: account XP `P.rxp` from every run (`finishRun`), `rankInfo()`, shards on each rank-up; bar on the title and end screens (`rankBarHTML`).
- Daily login bonus with a 7-day streak (`P.login`, `loginInfo`, `claimLogin`); button on the title while unclaimed.
- New-record bonus per map (`S.prevBest`, `retainHTML`) and a "beat your record" line in the wave 1 banner.
- MISSIONS screen (`showMissions`) shows the Daily Challenge and Bounties in every build, so the web demo has them again without side panels on the title.

**Pacts, training, records:**
- After boss waves 5, 10 and 15 (`afterCollect` → `openPact`, not in daily runs) the player may take one of two pacts or walk away. A pact is one of `DAILY_MODS` pushed into `S.mods` for the rest of the run, plus 40 gold. Bot sims must answer the `pact` modal (`pickPact`).
- First run only: a "Training" checklist (`TUT`, `F.tut`, `drawTut`) for move, kill, dash, skill, shrine; +30 gold when complete (`P.tips.tut`).
- Records row on the Achievements screen (`P.rec`: best combo, most kills, highest level; best wave per map from `P.best`).

**Content variety (owner request "everything is the same"):**
- Fourth map `marsh` (Witchmarsh): own scenery branch in `scenery()`, toxic pools that slow and poison the hero (`F.heroSlow`), purple Gate. `MAP_ORDER` is ruins, frost, marsh, hell; all open from the start, also in the web demo.
- Eight map-exclusive enemies, two per map (`MAPS[k].extra` = `{type:[minWave,weight]}`, added in `spawnPool`). They are tinted variants of existing sprites: `ED[k].base` + `ED[k].tint` (a canvas filter applied in `buildImages`). New behaviour flags: `chill` (slows the hero on hit), `leech` (heals on hit), `deathBoom` (explodes on death).
- Ranger is unlocked from the start (`defaultP().heroes`).
- Bot sims after this: ruins 13–20, marsh 6–20, frost (Ranger) 9, hell (Warden) 10–17.

**Battlefield changes every wave (owner request):** `S.scene` is the land shown in the current wave; `startWave` sets it to the next entry of `MAP_ORDER` (starting from the chosen map `S.map` in wave 1) and rebuilds the background (about 0.1–0.2 s). `scn()` returns it and drives terrain, pools, the Gate colour, ambient particles and the enemy pool (`bias`, `extra`). `S.map` still decides enemy HP, spawn rate, shard multiplier, records, ascension and achievements. Bot sims after this (Captain, start Moonlit Ruins, 6 runs): 9–20, one win.

**Eight lands:** `MAP_ORDER` is ruins, cave, frost, dunes, marsh, grave, storm, hell. The four newer ones (cave, dunes, grave, storm) are data-driven: `MAPS[k].kit` = pool colours + a list of scenery items drawn by the generic branch at the top of `scenery()`; `MAPS[k].gate` is the Gate colour. Pool effects per land are in `worldTick` (cave: skills recharge faster; dunes: quicksand slows hero and ground enemies; grave: +30% damage, `F.inWell`; storm: shocks ground enemies). Each has two tinted exclusive enemies in `MAPS[k].extra`. The land picker on hero select is a compact 4×2 grid; the description of the selected land shows in the info line. Map thumbnails for all eight are built at boot (start-up about 1.7 s in headless Chromium). In the website copy `DEMO_MAPS` must be a literal list: it is declared before `MAP_ORDER`. Bot sims: Captain from ruins 10–20; Warden from storm 10–15; Arcanist from grave 7–15.

**Balance reference** (bot, no upgrades, Moonlit Ruins): runs end around waves 11–20 and occasionally win. With Sanctum upgrades at level 4, it is mostly a win. Hellforge at near-max upgrades is about 50/50. Re-run bot sims after any number change.

## Conventions
- Keep the game a single offline HTML file. No CDNs.
- Keep the visual identity: dark navy/purple UI with teal (#3ef2d0) and pink (#ff5fa2) accents. **No black-and-gold and no light/white backgrounds** (owner preference).
- Text in the game is English. Localization (Indonesian, Chinese, …) is a later task: extract strings first if asked.
- After changing gameplay, run a headless smoke test: load, start a run, autopilot to the first shop, and expect no `pageerror`.
- Commit messages short. Do not commit `node_modules/` or `dist/`.
