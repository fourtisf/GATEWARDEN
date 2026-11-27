# Slotbound (Steam app 4459590) — commercial case study, state as of 27 Nov 2026

Research date: 27 Nov 2026 (the game was 15 days old). All figures carry their date. "Official" = Valve API / Steam store / developer statement. "Estimate" = third party (SteamSpy, SteamCharts tracking, press).

Source shorthand used below:
- STORE = https://store.steampowered.com/app/4459590/Slotbound (fetched 27 Nov 2026)
- APPDETAILS = https://store.steampowered.com/api/appdetails?appids=4459590&cc=us&l=en (fetched 27 Nov 2026)
- NEWS = Steam news feed for the app, https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0 (34 items, oldest 10 Jul 2026; fetched 27 Nov 2026)
- STEAMSPY = https://steamspy.com/api.php?request=appdetails&appid=4459590 (fetched 27 Nov 2026)
- STEAMCHARTS = https://steamcharts.com/app/4459590/chart-data.json (hourly series 13 Nov 18:15 UTC to 27 Nov 14:02 UTC; fetched 27 Nov 2026)

## What exactly is Slotbound (genre, mechanics, hook, art style, session length, content)? Tags and store description?

### Takeaway
Slotbound is a US$9.99 single-player roguelite auto-battler/defense game in which a 3x3 slot machine summons your army; the hook is "spin a slot machine to build an army, absorb weak units into strong ones, and bend the odds with items". It is pixel-art 2D, has a campaign of stages with boss and "Judgment" waves, an Endless Mode with online leaderboards, meta-progression, and 64 achievements.

### Cited Findings
- Official short description: "A roguelike auto-battler defense game where you spin a 3x3 slot machine to summon units, grow your army by absorbing others, and use Items and Cores to shape the odds against judgement and boss waves." — [Steam appdetails API](https://store.steampowered.com/api/appdetails?appids=4459590&cc=us&l=en)
- Store tagline: "Master your luck or be consumed by it!"; the long description calls it a "solo-developed roguelite defense game" combining 3x3 slot jackpots with autobattler strategy: summon units, absorb weaker ones to evolve, branching class choices, synergies from random stats, unit Imprints, Items and Cores. — [Steam store page](https://store.steampowered.com/app/4459590/Slotbound)
- Steam genres: Indie, Strategy. User tags (27 Nov 2026): Strategy, Auto Battler, Artificial Intelligence, Roguelike, Pixel Graphics, Tower Defense, Roguelite, Real Time Tactics, 2D, Fantasy, Magic, Management, Indie, Class-Based, Tactical, Procedural Generation, Perma Death, PvE, Resource Management, Singleplayer. — [Steam store page](https://store.steampowered.com/app/4459590/Slotbound)
- Tag vote weights per SteamSpy (27 Nov 2026): Strategy 86, Auto Battler 64, Rogue-like 59, Pixel Graphics 47, Artificial Intelligence 47, Tower Defense 46. — [SteamSpy](https://steamspy.com/api.php?request=appdetails&appid=4459590)
- Features/categories: Single-player, Steam Achievements, Full controller support (incl. DualShock/DualSense), Adjustable Difficulty, "playable at your own pace", Playable without Timed Input, Save Anytime, Steam Cloud, Family Sharing. Platforms: Windows and macOS, no Linux build. — [Steam appdetails API](https://store.steampowered.com/api/appdetails?appids=4459590&cc=us&l=en)
- 13 interface languages: English, Korean, French, Italian, German, Spanish (Spain), Japanese, Russian, Simplified Chinese, Polish, Portuguese (Brazil), Traditional Chinese, Turkish; no voice audio. Turkish was added 3 days after launch (15 Nov). — [Steam store page](https://store.steampowered.com/app/4459590/Slotbound); [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- Mechanics detail from press: matching paylines summon Warriors, Mages, Archers (also elves, jesters); a jackpot covering all nine slots guarantees a "Prism" unit; Jokers count toward matches; unwanted units are consumed to evolve allies; relics/items bought in a shop. — [Gamemeca, 14 Nov 2026](https://www.gamemeca.com/en/view.php?gid=1783506); [FluxGamer](https://fluxgamer.com/slotbound-ai-solo-developer-200000-sales-million-revenue)
- Content at 1.0 per a third-party explainer: campaign with bosses, Endless Mode with online leaderboards, adjustable difficulty, faction synergies, 64 Steam achievements, Steam Deck Verified. — [madrobot.blog, 27 Nov 2026](https://madrobot.blog/2026/11/27/slotbound-ai-made-steam-game-explained/)
- Patch notes confirm the structure: at least 6 stages ("Stage 6 rift"), difficulty tiers (Easy/Normal), Endless Mode beyond wave 150, x2/x3 battle speed, clear-time leaderboards, meta-currency "Originite", "Fate Stone" quests, a "Nudge" slot control, shop rerolls, a unit Collection, 6 factions named (Empire, Outlaw, Forest, Tribe, Arcane, Abyss). — [Steam news feed (v1.0.0(7) to v1.0.4 notes, 15-25 Nov 2026)](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- Playtime estimate (third-party): average 651 minutes (10.9 h) and median 537 minutes (9.0 h) per owner in the first two weeks. — [SteamSpy, 27 Nov 2026](https://steamspy.com/api.php?request=appdetails&appid=4459590)
- Top-rated reviews show very long tails: reviewers with 105.7 h, 223.3 h, 65.5 h, 30 h within 4-6 days of launch. — [Steam community reviews, top rated, fetched 27 Nov 2026](https://steamcommunity.com/app/4459590/reviews/?browsefilter=toprated&filterLanguage=english)
- AI disclosure on the store page: various visual assets and promotional materials were made with generative AI tools, then reviewed and refined by the developer. — [Steam store page](https://store.steampowered.com/app/4459590/Slotbound)
- Minimum spec is low (Windows 10, i3-6100, 4 GB RAM, GTX 750 Ti, 2 GB disk); internet needed only for leaderboards. — [Steam store page](https://store.steampowered.com/app/4459590/Slotbound)

### Inferences
- One-sentence hook (my wording, derived from the store copy): "A slot machine summons your army — spin, merge, and rig the odds to survive the waves."
- The hook is readable in a single screenshot/GIF (a slot machine next to a battlefield), which fits the pattern of the other 2025-26 "slot machine roguelike" hits.
- Median 9 h in two weeks for a $9.99 game implies strong value-per-dollar perception; this is consistent with "worth the price" appearing repeatedly in reviews.

### Gaps
- Typical length of one run/session: not stated on the store page or in any source found.
- Exact counts of units, items, Cores and stages: not found in an official source (only "at least 6 stages" and "64 achievements" via secondary sources).
- Full verbatim store description could not be reproduced (fetch tool summarised it).

## Who made it (solo dev or studio, prior games, publisher)?

### Takeaway
A first-time South Korean solo developer publishing as "Optima Arch" (self-published, no publisher), with no prior games and by his own account no programming background; nearly all code was written by AI coding agents. Development took about 13 months (17 Oct 2025 to 12 Nov 2026).

### Cited Findings
- Developer and publisher fields are both "Optima Arch". — [Steam appdetails API](https://store.steampowered.com/api/appdetails?appids=4459590&cc=us&l=en)
- "I started developing Slotbound on October 17, 2025 ... the day I decided to try making my own game, despite having no experience as a game developer. This is my first game." — developer announcement "A Personal Update on Slotbound's Delayed Release", 11 Nov 2026, [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- Demo announcement (10 Jul 2026): "Slotbound is my first game, developed solo over the past eight months." — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- Gamemeca describes Optima Arch as a South Korean solo developer. — [Gamemeca, 14 Nov 2026](https://www.gamemeca.com/en/view.php?gid=1783506)
- FluxGamer names the developer as Min Kim, 28, citing an Inven Global interview; he first used Copilot then moved to Codex; the game is built on the LÖVE framework in Lua; "virtually all of the code was written by AI"; he directed features, played builds, checked results, built testing tools and documented rules to catch recurring agent mistakes; he used purchased assets and received music from a volunteer. — [FluxGamer](https://fluxgamer.com/slotbound-ai-solo-developer-200000-sales-million-revenue)
- July 2026: developer said 100% of code was AI-generated and that he cannot write code; AI also produced animations, UI, backgrounds and menu pixel art; a small part of assets was purchased or hand-edited; his own work was game design, balance, visual consistency and polish. — [iXBT Games, 27 Jul 2026](https://ixbt.games/en/news/2026/07/27/entuziast-sgeneriroval-s-pomoshhiu-ii-azartnyi-rogalik-slotbound-igrokam-ponravilas-demoversiia-v-steam.html)
- The idea reportedly came from watching three symbols line up in CloverPit; a sibling with a computer-science background suggested "vibe coding" (attributed to a Gamemeca interview of 4 Nov 2026). — [madrobot.blog, 27 Nov 2026](https://madrobot.blog/2026/11/27/slotbound-ai-made-steam-game-explained/)
- The store "website" field is a Google Drive folder, not a studio site. — [Steam appdetails API](https://store.steampowered.com/api/appdetails?appids=4459590&cc=us&l=en)
- The developer has an itch.io profile and devlog thread ("This is my first ever game, and I've been working on it for the past 8 months as a solo developer"); the itch page labels code, graphics and sounds "AI Assisted". — [itch.io profile](https://itch.io/profile/optimaarch); [madrobot.blog](https://madrobot.blog/2026/11/27/slotbound-ai-made-steam-game-explained/)

### Inferences
- Team size = 1 plus a volunteer composer and purchased asset packs; no publisher, no PR agency evident.
- The "name" Min Kim comes from one secondary outlet citing an interview I did not read directly; treat as probable, not confirmed.

### Gaps
- The Inven Global and Gamemeca (4 Nov) interviews were not fetched directly; details above are second-hand.
- No list of the exact AI art/audio tools was found (madrobot.blog says the developer has not published one).

## Price, launch date, launch discount, Early Access or 1.0?

### Takeaway
US$9.99, released 12 Nov 2026 (US time; 13 Nov 02:06 UTC) as a 1.0 release, not Early Access, after a three-day delay caused by Steam build review. A 10% launch discount ($8.99) is indicated by SteamSpy only; it had ended by 27 Nov.

### Cited Findings
- Price US$9.99, 0% discount on 27 Nov 2026; release date "Nov 12, 2026"; no Early Access flag. — [Steam appdetails API](https://store.steampowered.com/api/appdetails?appids=4459590&cc=us&l=en)
- SteamSpy snapshot shows price 899 cents, initial price 999, discount 10% (third-party snapshot, date of capture not given; consistent with a launch-week discount). — [SteamSpy](https://steamspy.com/api.php?request=appdetails&appid=4459590)
- "Slotbound 1.0 Is Out Now!" was posted 13 Nov 2026 02:06 UTC. — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- Release plan changed twice: on 27 Sep and 5 Oct 2026 the developer said the game "will launch in Early Access on November 10 instead of releasing as a full version"; it actually shipped labelled 1.0. — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- Delay: build submitted for Steam review 18 Oct; first review took 13 days and was rejected; second review still pending after 12 more days; "Slotbound was supposed to release today" (post of 9 Nov 21:13 UTC). The developer said the game "disappeared from Steam's upcoming releases, losing the visibility it had before". — [Steam news feed (posts of 9 and 11 Nov 2026)](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- Regional prices on 27 Nov 2026 (no discount): UK £8.19, euro €9.69, Canada CA$12.49, Australia A$14.15, India ₹509, Japan ¥1,400, Brazil R$33.99. — [madrobot.blog](https://madrobot.blog/2026/11/27/slotbound-ai-made-steam-game-explained/)
- 8 bundles are listed, e.g. Slotbound X Dungeonbound (-15%), Pool of Madness x Slotbound (-10%), Slotbound & Dungeon Clawler (-29%). — [Steam store page](https://store.steampowered.com/app/4459590/Slotbound)
- No DLC; a planned "Supporter Pack" was cancelled because "after delaying the release, asking for additional support just didn't feel right". — [Steam news feed (13 Nov 2026)](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)

### Inferences
- The 12 Nov vs 13 Nov date conflict in press is only a time-zone difference (13 Nov 02:06 UTC = evening of 12 Nov US Pacific).
- Gamemeca's English page says "launched on August 13" and reviews "as of August 14"; the article is dated 14 Nov 2026 and the Korean says "the 13th", so this is a translation error for November.
- Eight cross-developer bundles within two weeks of launch is an active post-launch discovery tactic (bundles show on both partners' store pages).

### Gaps
- Launch discount size and duration are not confirmed by an official source (only SteamSpy's 10% field).
- Why the label switched from Early Access back to 1.0 was not found.

## Steam reviews and rating? Estimated copies sold / revenue? Peak concurrent players?

### Takeaway
Official/developer figures: 100,000 copies in 3 days, 200,000 in under a week, about US$1.33M gross in week one. Reviews are "Very Positive" (about 91-92% of English reviews; a few thousand reviews in total). Peak concurrency tracked by SteamCharts was 32,581 on 18 Nov 2026, still about 16,800 on 27 Nov.

### Cited Findings
Developer-stated (official from the developer, not audited):
- "Slotbound has passed 100,000 copies sold ... just three days after launch" (16 Nov 2026). — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- "Slotbound has passed 200,000 copies sold ... less than a week after launch" (19 Nov 2026). — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- First-week gross revenue US$1,332,409, stated by the developer (posted on X on 20 Nov per one outlet; via an Inven Global interview per another); gross, before Steam's cut, refunds and taxes. — [FluxGamer](https://fluxgamer.com/slotbound-ai-solo-developer-200000-sales-million-revenue); [madrobot.blog](https://madrobot.blog/2026/11/27/slotbound-ai-made-steam-game-explained/); [PlayGround.ru via Steam news, 25 Nov 2026](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)

Reviews (official Steam data, different cuts):
- Store page, 27 Nov 2026: English reviews "Very Positive", 92% of 573. — [Steam store page](https://store.steampowered.com/app/4459590/Slotbound)
- appdetails "recommendations" total: 2,833 (27 Nov 2026). — [Steam appdetails API](https://store.steampowered.com/api/appdetails?appids=4459590&cc=us&l=en)
- Review trajectory from press: 96% positive with 2,500+ concurrent players on 13 Nov; 87% of 239 reviews on 14 Nov; 91% Very Positive in late-November coverage. — [PlayGround.ru via Steam news, 13 Nov](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0); [Gamemeca](https://www.gamemeca.com/en/view.php?gid=1783506); [Instant Gaming News](https://news.instant-gaming.com/en/articles/23205-slotbound-a-strategy-roguelike-that-relies-heavily-on-ai-has-generated-more-than-1-33-million)
- 66 Steam curators have reviewed it (27 Nov). — [Steam store page](https://store.steampowered.com/app/4459590/Slotbound)

Third-party estimates:
- SteamSpy (27 Nov 2026): owners 100,000-200,000; 1,818 positive / 451 negative (80%); CCU 19,778. — [SteamSpy](https://steamspy.com/api.php?request=appdetails&appid=4459590)
- SteamCharts hourly tracking: all-time peak 32,581 concurrent on 18 Nov 2026 14:01 UTC. Daily peaks: 13 Nov 3,795 (partial day); 14 Nov 9,347; 15 Nov 15,265; 16 Nov 22,526; 17 Nov 29,423; 18 Nov 32,581; 19 Nov 31,488; 20 Nov 28,905; 21 Nov 27,966; 22 Nov 26,824; 23 Nov 25,196; 24 Nov 22,554; 25 Nov 20,615; 26 Nov 18,928; 27 Nov 16,835 (to 14:02 UTC). — [SteamCharts data](https://steamcharts.com/app/4459590/chart-data.json)
- Valve API live count: 16,839 players at about 14:00 UTC on 27 Nov 2026 (official, point-in-time). — [Steam GetNumberOfCurrentPlayers](https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=4459590)

### Inferences
- $1,332,409 / roughly 200,000 copies is about $6.6 gross per copy, which fits $9.99 minus a 10% launch discount and heavy regional-price (Asia) weighting. Net to the developer after Steam's 30% and refunds/taxes would be materially lower (roughly half to 60% of gross is the usual rule of thumb; not a sourced figure for this game).
- The CCU curve is unusual: it rose for six straight days after launch (3.8k to 32.6k) instead of peaking on day one. That shape indicates word of mouth / algorithmic and media pickup after launch, not a wishlist-conversion spike alone. Daily peaks land around 14:00 UTC (evening in East Asia), which suggests a large Asian (Korea/China/Japan) audience.
- The SteamSpy 80% score versus Steam's 92% English score suggests non-English reviews are noticeably more negative than English ones (SteamSpy counts all languages), but SteamSpy's counts may also be stale; this is a conflict to flag, not a settled fact.
- SteamSpy's 100k-200k owner band is at or below the developer's 200k+ statement, i.e. the third-party estimate lags.

### Gaps
- Exact all-language review count and percentage: the Steam appreviews JSON endpoint redirected (HTTP 302) from this environment, so the total could not be read directly; 2,833 "recommendations" is the best official proxy.
- Gamalytic (API requires a key), VG Insights and SteamDB pages were not retrievable; no estimates from them are recorded.
- Sales after 19 Nov: no later developer milestone (e.g. 300k) was found as of 27 Nov.
- Refund rate, country split, wishlist-to-sale conversion: not published.

## How was it marketed before and after launch?

### Takeaway
No publisher and no evidence of paid marketing: the funnel was a free Steam + itch.io demo released four months before launch, updated about every 1-2 weeks from player feedback, which took wishlists from 0 to 50,000 in 17 days and 100,000 in 11 weeks. After launch the engines were extreme patch cadence (9 updates in 3 days), personal developer posts, and a wave of "solo first-timer made $1.33M with AI" press.

### Cited Findings
Timeline (all dates 2026 unless noted):
- 17 Oct 2025: development starts. — [Steam news feed (11 Nov post)](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- June: devlog opened on itch.io. — [madrobot.blog](https://madrobot.blog/2026/11/27/slotbound-ai-made-steam-game-explained/)
- 10 Jul: free demo released on Steam (app 4906570) and itch.io, with a direct wishlist ask and "Can you clear the demo on your first run?" challenge; demo trailer on YouTube titled "I Made a Roguelite Where a Slot Machine Builds Your Army | Slotbound Demo Trailer". — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0); [iXBT Games](https://ixbt.games/en/news/2026/07/27/entuziast-sgeneriroval-s-pomoshhiu-ii-azartnyi-rogalik-slotbound-igrokam-ponravilas-demoversiia-v-steam.html)
- Demo updates: v0.2.0 13 Jul, v0.2.5 15 Jul, v0.2.7 16 Jul, v0.3.0 23 Jul (Core system rebuilt), v0.3.1 27 Jul, v0.3.2 31 Jul, v0.3.3 20 Aug, v0.3.4 30 Aug, v0.4.0 5 Oct (new unit, Stage 2, faction synergies, controller support, 8 more languages), v0.4.1 6 Oct. — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- The demo appeared in Steam's "Trending Free" tab (search result URL carries the TrendingFree tracking tag). — [Steam demo page](https://store.steampowered.com/app/4906570/Slotbound_Demo/?snr=1_4_4__tab-TrendingFree)
- 27 Jul: 50,000 wishlists (17 days after the demo). — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- 27 Jul: first press found — iXBT Games (Russia) on the "AI-generated gambling roguelike" whose demo players liked. — [iXBT Games](https://ixbt.games/en/news/2026/07/27/entuziast-sgeneriroval-s-pomoshhiu-ii-azartnyi-rogalik-slotbound-igrokam-ponravilas-demoversiia-v-steam.html)
- September/October: unofficial copycat mini-games appeared on Douyin and WeChat (reported from a Gamemeca interview). — [madrobot.blog](https://madrobot.blog/2026/11/27/slotbound-ai-made-steam-game-explained/)
- 27 Sep: 100,000 wishlists; release date 10 Nov announced. — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- Wishlists at launch: "over 100,000" (developer, 11 Nov). — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- Steam Next Fest: Gamemeca says the game "drew attention at Steam Next Fest". The October 2026 Next Fest ran 19-26 Oct. — [Gamemeca](https://www.gamemeca.com/en/view.php?gid=1783506); [God is a Geek](https://godisageek.com/2026/10/steam-next-fest-october-2026/)
- 9-11 Nov: two candid delay posts (launch-day miss, long personal letter about solo development and stress). — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- 12/13 Nov: launch. 13-16 Nov: nine hotfix/updates in about three days (difficulty eased three times, compatibility fixes, QoL), then v1.0.1 17 Nov, v1.0.2 19 Nov, v1.0.3 22 Nov, v1.0.4 24-25 Nov. "Since launch I've released nine updates, and most of them came from your reports and suggestions." — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- 16 and 19 Nov: sales-milestone posts (100k, 200k). 20 Nov: developer posts week-one gross revenue on X. 25 Nov: Gergely Orosz posts on X disputing a viral post that called the game merely "vibe-coded". — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0); [madrobot.blog](https://madrobot.blog/2026/11/27/slotbound-ai-made-steam-game-explained/)
- Post-launch press angle is almost entirely "solo first-time developer + AI + $1.33M in a week": Yahoo Tech syndication ("A solo developer's first game made $1.3 million on Steam in a week despite gen AI use"), Instant Gaming News, PlayGround.ru (13 and 25 Nov), Gamemeca, FluxGamer, and others. — [Yahoo Tech](https://tech.yahoo.com/gaming/articles/solo-developers-first-game-made-172451086.html); [Instant Gaming News](https://news.instant-gaming.com/en/articles/23205-slotbound-a-strategy-roguelike-that-relies-heavily-on-ai-has-generated-more-than-1-33-million); [Gamemeca](https://www.gamemeca.com/en/view.php?gid=1783506)
- Community channels named by the developer: Discord and the Steam Community Hub. — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- Publisher support: none (self-published). — [Steam appdetails API](https://store.steampowered.com/api/appdetails?appids=4459590&cc=us&l=en)

### Inferences
- The demo was the marketing. 0 to 50k wishlists in 17 days with no publisher implies the demo was picked up by Steam's own surfaces (Trending Free) and by content creators/short-video platforms; the appearance of Douyin/WeChat clones by September implies real virality in China, though no specific videos were found.
- Demo-as-live-service: 10 demo updates in 3 months, each with a news post, repeatedly re-notified followers and showed responsiveness; the same pattern continued after launch.
- Release was timed about two to three weeks after October Next Fest, the standard "Next Fest then launch" window; the review delay cost the "Upcoming" list slot yet the game still sold 100k in 3 days, so the 100k+ wishlist base and demo audience carried launch.
- The AI angle generated both press and controversy; the "Artificial Intelligence" user tag is the third-highest tag, showing players themselves flag it.

### Gaps
- Next Fest participation is asserted by one outlet only; which edition and the demo's ranking/peak players are unverified (SteamCharts demo data returned empty).
- No named YouTubers, Twitch streamers, TikTok or Reddit posts could be found via search; streamer coverage is therefore unverified, not disproven.
- Store page "coming soon" launch date (when the Steam page went live) and announcement date: not found; earliest Steam news item is 10 Jul 2026.
- No PC Gamer, Rock Paper Shotgun, GamesRadar, Polygon or How To Market A Game article on Slotbound was found (the Yahoo Tech piece is a syndication whose original outlet could not be read: HTTP 403).
- Whether any paid ads or keys-to-creators campaign ran: no information.

## What do reviewers and press say makes it fun or addictive, and what are the complaints?

### Takeaway
Praise centres on "one more run" compulsion, surprising depth and meta-progression, and value for $9.99; complaints centre on luck overriding agency, grindy meta-currency, early difficulty/balance, UI clunkiness, and (outside the game itself) AI use and the launch delay.

### Cited Findings
- Positive, 1.9 h: "very easy to convince yourself you're only going to do one more run"; worth the price. — [Steam community reviews](https://steamcommunity.com/app/4459590/reviews/?browsefilter=toprated&filterLanguage=english)
- Positive, 65.5 h: "Actually more meta progression and depth than I even expected." — [Steam community reviews](https://steamcommunity.com/app/4459590/reviews/?browsefilter=toprated&filterLanguage=english)
- Positive, 223.3 h: calls it a masterpiece that "only truly shines when you learn the mechanics"; unlocking the full tree was a struggle. — [Steam community reviews](https://steamcommunity.com/app/4459590/reviews/?browsefilter=toprated&filterLanguage=english)
- Positive, 30.3 h: simple premise executed well; wanted to quit mid-run and resume. Positive, 29.8 h: "i wish to have more stages". Positive, 105.7 h: wants a practice dummy to test combinations. — [Steam community reviews](https://steamcommunity.com/app/4459590/reviews/?browsefilter=toprated&filterLanguage=english)
- Negative, 4.0 h: "Ninety percent of runs will end purely because you didn't roll an upgraded unit" (too little agency). Negative, 3.8 h: "the slots do nothing but stop me from having fun"; meta-currency grind required. Negative, 0.5 h: clunky mouse/Steam Deck controls, cumbersome merging, overcomplicated UI. — [Steam community reviews](https://steamcommunity.com/app/4459590/reviews/?browsefilter=toprated&filterLanguage=english)
- Korean press summary of user reviews: praise for addictiveness, deck-building feel and the luck/strategy balance; criticism that balance still feels unstable. — [Gamemeca, 14 Nov 2026](https://www.gamemeca.com/en/view.php?gid=1783506)
- The developer's own fixes confirm the complaint list: overall difficulty eased on 13, 14 and 15 Nov ("Stage 1 and Stage 2 are now easier", "Reduced the difficulty of the first boss in each stage", more upgrade currency in Stages 1-2), a "Give Up" button added, Endless Mode performance fixes, crash/compatibility fixes. — [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- Crashes reported on some Intel 13th/14th-gen CPUs, addressed with an experimental "CPU Stability Mode". — [madrobot.blog](https://madrobot.blog/2026/11/27/slotbound-ai-made-steam-game-explained/)
- Some players blamed the developer for the delay and threatened negative reviews. — [Steam news feed (11 Nov post)](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4459590&count=60&maxlength=0)
- AI backlash exists (Reddit criticism mentioned by an itch.io commenter; the developer called AI use "a sensitive topic"), but headlines frame the sales as happening "despite gen AI use". — [madrobot.blog](https://madrobot.blog/2026/11/27/slotbound-ai-made-steam-game-explained/); [Yahoo Tech](https://tech.yahoo.com/gaming/articles/solo-developers-first-game-made-172451086.html)
- The store copy itself sells the dopamine angle while insisting the game is not a mindless slot machine left to chance. — [Steam store page](https://store.steampowered.com/app/4459590/Slotbound)

### Inferences
- The fun formula reviewers describe = slot-machine anticipation (variable reward) + visible army growth via merging + long meta-progression tree + Endless Mode/leaderboards for the 100-hour players.
- The main risk of the design is exactly its hook: when RNG decides runs, low-playtime players bounce (negative reviews cluster under 5 h). The developer mitigated this with manipulation tools (Nudge, Fate Stones, Cores, rerolls) and by lowering early difficulty within 48 hours.
- Fast, visible response to complaints probably protected the rating (87% on 14 Nov rising to 91-92% English by late November).

### Gaps
- No scored critic reviews (Metacritic/OpenCritic) were found.
- Only the 10 top-rated English reviews were read; non-English sentiment (likely a large share of buyers) was not sampled.

## Which similar games is it compared to, and how did those perform?

### Takeaway
Slotbound sits in the 2025-26 wave of slot-machine roguelikes and names CloverPit as its direct inspiration; CloverPit (two developers plus a publisher) is the genre benchmark at 1 million copies in under two months, and Slots & Daggers is the closest solo-dev analogue at 100,000 copies in 10 days, a pace Slotbound roughly tripled.

### Cited Findings
- The developer's idea reportedly came from CloverPit (via a Gamemeca interview). — [madrobot.blog](https://madrobot.blog/2026/11/27/slotbound-ai-made-steam-game-explained/)
- CloverPit (Panik Arcade, publisher Future Friends Games): 20,000 copies in two hours, 100,000 in a day, 300,000 in four days, 500,000 in eight days, over 750,000 in about two weeks, 1 million in under two months (Nov 2025); peak over 25,000 concurrent; revealed at the Triple-i Showcase with a Steam front-page takeover. — [PowerUp Gaming](https://powerupgaming.co.uk/2025/10/02/cloverpit-sells-300000-copies-in-4-days/); [GamingOnLinux](https://www.gamingonlinux.com/2025/10/cloverpit-is-another-big-hit-on-steam-hitting-500000-sales/); [GamesMarket](https://www.gamesmarket.global/750000-copies-sold-how-cloverpit-completely-beat-future-friends-best-case-predictions-6bf7f63be1546a7ae7f40eef3ef99379/); [PC Gamer](https://www.pcgamer.com/games/roguelike/slot-machine-roguelike-cloverpit-sells-1-million-copies-and-its-developer-celebrates-the-payout-by-adding-its-most-requested-feature-yet)
- CloverPit revenue: about US$6.7M per Gamalytic (third-party estimate; developers did not disclose revenue). — [Instant Gaming News](https://news.instant-gaming.com/en/articles/16032-cloverpit-a-slot-machine-style-roguelite-has-surpassed-one-million-sales)
- Slots & Daggers (solo developer, D&D-flavoured slot machine roguelike): 100,000 copies in its first 10 days, "a surreal number for a solo dev like me". — [GamesRadar](https://www.gamesradar.com/games/roguelike/another-roguelike-success-story-has-hit-steam-d-and-d-flavored-slot-machine-slots-and-daggers-sells-100-000-copies-in-10-days-a-surreal-number-for-a-solo-dev-like-me)
- Steam bundles pair Slotbound with Dungeon Clawler, Dungeonbound and Pool of Madness (small luck/arcade roguelikes), showing which audiences the developer targets. — [Steam store page](https://store.steampowered.com/app/4459590/Slotbound)

### Inferences
- Slotbound's peak (32,581, SteamCharts) exceeded CloverPit's reported peak (25,000+), although CloverPit sold faster in week one (500k in 8 days vs 200k in 7); Slotbound's players are more concurrent/retained per copy, consistent with its auto-battler meta-progression and Endless Mode.
- Positioning lesson: Slotbound is not "another slot machine game" but "slot machine x auto-battler/tower defense" — a proven hook (slots) attached to a second proven genre, at an impulse price, readable in one image.

### Gaps
- No sales figures were retrieved for Luck be a Landlord, Balatro or Ballionaire in this session; none are recorded here to avoid guessing.
- No press article was found that explicitly compares Slotbound with Balatro, Luck be a Landlord or Ballionaire; the only sourced comparison is CloverPit.
