# CLAUDE.md — Gatewarden website (put it on GitHub, then it deploys itself)

A static website: the browser **free demo** of Gatewarden (single-file HTML5 game). No build step, no server code.
Everything served lives in `site/`. The owner, ALFA, is non-technical and Indonesian, so keep replies to him short and in Indonesian.
**The owner has approved all of the steps below. Do them without asking; ask only for values listed as "ask the owner".**

## ▶ YOUR JOB (Claude Code)
1. Write these files into this GitHub repo.
2. Commit, push, and get them onto `main`.
3. GitHub Actions then checks the site and deploys it.
4. Report the live URL to the owner.

### Step 1 — put the files in the repo
- **If this repo already holds the Steam/Electron project** (it has `package.json` and `game/` at the root), copy this package into **`website/`**:
  ```bash
  mkdir -p website && cp -r <unzipped>/gatewarden-web/{site,scripts,nginx,vercel.json,netlify.toml,README.md} website/
  mkdir -p .github/workflows && cp <unzipped>/gatewarden-web/.github/workflows/*.yml .github/workflows/
  ```
  - The workflows detect `site/` or `website/site/` on their own, so you don't need to edit any paths.
  - Keep the existing `build.yml` and `steam-deploy.yml`.
  - Optional, to save CI minutes: add `paths-ignore: ['website/**']` under `push:` in `build.yml`, so website-only commits don't rebuild the Windows .exe.
- **If the repo is empty or is meant only for the website**, copy the package contents to the **repo root**, so that `site/`, `scripts/`, `.github/` and the rest sit at the top level.

### Step 2 — check locally (stdlib only, about 1 second)
```bash
python3 scripts/check-site.py               # or: python3 website/scripts/check-site.py website/site
```
It must print `OK: ... ready to deploy`. Optionally preview the site: `cd site && python3 -m http.server 8080`.

### Step 3 — commit and push to main
```bash
git add -A
git commit -m "Add Gatewarden website (free web demo) + deploy workflows"
git push -u origin HEAD                      # your session branch
git push origin HEAD:main                    # create/update main (owner approved)
```
- If `main` does not exist yet, the second push creates it.
- Make `main` the default branch, either through Settings → General → Default branch, or with `gh api -X PATCH repos/{owner}/{repo} -f default_branch=main`. The GitHub Pages environment only accepts the default branch.
- If pushing to `main` is blocked (branch protection or session restrictions), open a PR from your branch to `main`. Tell the owner, in Indonesian, to click **Merge pull request**.

### Step 4 — turn on hosting (choose one; default = GitHub Pages, free and needs no server)
- **GitHub Pages**
  1. Enable Pages once. Try `gh api -X POST repos/{owner}/{repo}/pages -f build_type=workflow`. If that is not permitted, tell the owner: *Settings → Pages → Source → GitHub Actions*.
  2. Re-run **Deploy web (GitHub Pages)** from the Actions tab, or push again.
  3. The site will be at `https://<owner>.github.io/<repo>/`. All paths are relative, so the subfolder URL works.
  - Pages on a **private** repo needs a paid GitHub plan. On a free plan, use Vercel instead.
- **Vercel** (free, private repos OK): import the repo at vercel.com.
  - Repo root layout: no settings needed (`vercel.json` points at `site/`).
  - `website/` layout: set *Root Directory* = `website`.
  - Vercel redeploys on every push to main.
- **Netlify / Cloudflare Pages**:
  - Netlify: same as Vercel. Base directory `website` if nested; `netlify.toml` publishes `site`.
  - Cloudflare Pages: output directory `site` or `website/site`, no build command.
- **Hostinger VPS (owner's server)**:
  - Ask the owner for: the domain, the VPS IP, the SSH user, and an SSH private key (or have him add your public key).
  - Add the repo secrets `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_PATH` (e.g. `/var/www/gatewarden`), and optionally `VPS_PORT`. **Deploy web (VPS)** then runs on every push to main. Without secrets it skips with a green notice and does not fail.
  - On the server, install `nginx/gatewarden.conf` (replace `YOUR_DOMAIN`), then `nginx -t && systemctl reload nginx` and `certbot --nginx -d DOMAIN`. The full commands are at the top of that file.

### Step 5 — finish
- Once there is a real domain, change `og:image` and `twitter:image` in `site/index.html` to absolute URLs (`https://DOMAIN/assets/og-image.jpg`). Link previews on X and Telegram need absolute URLs.
- Reply to the owner in Indonesian with:
  - the live URL;
  - which workflow runs are green;
  - anything he must click himself (Pages source, Merge PR, secrets).

## Workflows (in `.github/workflows/`)
| File | When it runs | What it does |
|---|---|---|
| `site-check.yml` | every push and PR, any branch | runs `scripts/check-site.py` (files exist, fonts local, no external scripts, JS syntax, `dev` not true) |
| `deploy-pages.yml` | push to `main`, or manual | publishes `site/` (or `website/site/`) to GitHub Pages |
| `deploy-vps.yml` | push to `main`, or manual | rsyncs the site to the VPS; skips cleanly if the secrets are missing |

## Config, no rebuild needed: `site/config.js`
```js
window.GW_CONFIG = { demo: true, demoWaves: 10, steamUrl: "", dev: false };
```
- `demo: true` (default) is the free demo:
  - It ends after wave 10 with a "DEMO COMPLETE" screen.
  - Only Captain, Ranger and Moonlit Ruins are playable. The rest show "Full game on Steam".
  - This protects Steam sales.
- `demo: false` gives the full game in the browser.
- `steamUrl`: set it to the Steam store link once the Coming Soon page is live. Every "COMING SOON TO STEAM" button then becomes "★ WISHLIST ON STEAM".
- `dev: true`, or opening the URL with `?dev`, shows the "unlock all" test button. CI fails if `dev: true` is committed.
- `index.html` and `config.js` are served `no-cache` (nginx, vercel, netlify and `_headers` all set this), so edits show up immediately.

## Facts about `site/index.html`
- It is the same game as the Steam build (`game/index.html` in the Steam project), plus the web head:
  - meta and OG tags;
  - icons;
  - `<script src="config.js">`;
  - local `@font-face` (Outfit and Silkscreen, SIL OFL; licenses in `site/fonts/`).
- Saves go to `localStorage` key `gatewarden.save.v1`, per browser.
- Input is keyboard and mouse, or a gamepad. Touch devices see a "BEST ON PC" notice; there are no touch controls yet.
- Test hooks: `window.__G` (`TEST.auto` autopilot, `TEST.turbo` fast headless sim). The architecture is described in the Steam project's CLAUDE.md.
- Do not restyle. The palette (dark navy/purple, teal and pink accents) is owner-approved. No black-and-gold, no light backgrounds.
- To update the game later, regenerate `index.html` from the Steam project's `game/index.html`:
  - Keep this file's `<head>` additions (meta/OG tags, icons, `config.js` script, local `@font-face`).
  - Keep the free-demo title, then run `scripts/check-site.py`.
