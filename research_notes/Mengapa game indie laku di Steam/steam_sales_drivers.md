# What drives indie game sales on Steam (evidence as of November 2026)

Reading guide. Each finding is labelled by evidence type:
- **[Valve]** = Valve's own Steamworks documentation or announcement.
- **[Data]** = a data study or survey (sample and year given; most are self-reported surveys or third-party estimates, not Valve data).
- **[Opinion]** = analyst or practitioner advice without a measured effect.
- **[Secondary]** = I only saw the claim through a news write-up or search summary, not the original.

Estimators (Gamalytic, VG Insights, GameDiscoverCo) reverse-engineer sales from public Steam data. Treat their figures as estimates.

## 1. Wishlists: how they map to sales, thresholds, and how they accumulate

### Takeaway
Median first-week sales are roughly 10-25% of launch wishlists, but the spread is an order of magnitude wide, and quality (review score) moves it more than the wishlist count does. The long-cited "7,000 wishlists for Popular Upcoming" rule is obsolete: in June 2026 Valve raised that bar (estimated at about 100,000) and the Personal Calendar is now the realistic pre-launch front-page surface for small games.

### Cited Findings

**Wishlist-to-sales conversion**
- [Data] How To Market A Game (HTMAG) benchmarks, median first-week conversion by wishlists at launch: under 4,999 = 15%; 5,000-39,999 = 20%; 40,000-99,999 = 23%; 100,000+ = 25%. The companion table sorted by revenue is from June 2020 (old): $1,000 earners = 11.93%, $10,000 = 20.49%, $100,000 = 25.35%, $1,000,000 = 27.08%. — [HTMAG benchmarks](https://howtomarketagame.com/benchmarks/)
- [Data] Gamalytic sample of about 700 Steam games released after September 2023 with at least 5,000 wishlists: median week-1 sales = 22% of launch wishlists and median month-1 sales = 27%. The article gives a second cut of 17% and 23%, tied to how games selling under 500 copies in month 1 are treated; my read of which cut is which was ambiguous, so use 17-22% and 23-27% as ranges. Range: the weakest tenth convert about 0.06x in month 1 and the strongest tenth about 1.34x. Full releases convert about 30% in month 1 against about 20% for Early Access. Published May 2024. — [GameDiscoverCo, May 2024](https://newsletter.gamediscover.co/p/how-user-reviews-affect-your-games)
- [Data] GameDiscoverCo 2024-2025: for games with more than 25,000 launch wishlists the median first-week conversion over the past year was 0.15x (about 0.14x excluding NSFW games); for games priced above $10 it was 0.10x. Conversion "varies by an order of magnitude between projects". GameDiscoverCo reports no long-term decline in conversion; the difficulty is that wishlists are harder to gather. Published November 2025. — [Game Dev Reports summary of GameDiscoverCo](https://gamedevreports.substack.com/p/gamediscoverco-the-state-of-steam)
- [Data] Same report: under-performing games had a median 67% (Mixed) user score in their first seven days against 91% (Very Positive) for over-performers, and had been on Steam pre-release an average of 411 days against 214 days for games that beat expectations. — [Game Dev Reports summary of GameDiscoverCo](https://gamedevreports.substack.com/p/gamediscoverco-the-state-of-steam)
- [Data, older] Game Developer survey: median first-week unit sales 0.2x launch wishlists, range 1.5% to over 100%. Date not confirmed in my read; treat as pre-2023. — [Game Developer](https://www.gamedeveloper.com/business/steam-the-new-wishlists-to-first-week-sales-expectations)

**Wishlists at launch benchmarks**
- [Data/Opinion] HTMAG "wishlists at launch" tiers (entry updated June 2026): Bronze 5,000; Silver 8,000; Gold 50,000; Diamond 90,000. Tiers refer to lifetime gross: Bronze $0-10K, Silver $10K-249K, Gold $250K-999K, Diamond $1M+. — [HTMAG benchmarks](https://howtomarketagame.com/benchmarks/)
- [Data] HTMAG wishlists earned per week while a page is live (August 2022 study, old): Bronze 0-40; Silver 15-120; Gold 100-700; Diamond 300-3,000. Wishlists in the first weeks of a Coming Soon page: Bronze 23-68; Silver 79-441; Gold 134-1,575; Diamond 426-4,275. Wishlist deletion rates run about 9-13% in every tier. — [HTMAG benchmarks](https://howtomarketagame.com/benchmarks/)

**Popular Upcoming and the Personal Calendar**
- [Opinion, now archived] Zukowski's long-standing rule was "Minimum is 7000, or thereabouts" wishlists to reach Popular Upcoming, with some games appearing at about 5,500 in quiet weeks; a featured game earned about 1,000 wishlists per day. He archived this post in June 2026 and states it is out of date. — [HTMAG archive](https://howtomarketagame.com/2026/06/25/archive-how-many-wishlists-should-i-have-when-i-launch-my-game/)
- [Valve + analyst estimate] In June 2026 Valve changed Popular Upcoming; Valve's wording: "The contents of this tab have been updated in response to player feedback". Zukowski estimates the bar moved from about 7,000 to about 100,000 wishlists. The 100,000 figure is his observational estimate, not a Valve number. — [HTMAG, June 2026](https://howtomarketagame.com/2026/06/25/how-the-steam-personal-calendar-affects-your-launch/)
- [Secondary] Personal Calendar: a per-user timeline of upcoming and new releases built from the player's wishlist, follows and play history. Developer reports say it can show a game for up to two months before release and after launch, where Popular Upcoming showed it for a day or two. Entry is estimated at 8,000-30,000 wishlists depending on the game (estimate, not Valve). — [PC Guide, July 2026](https://www.pcguide.com/news/steams-new-100000-wishlist-rule-means-many-indie-devs-will-have-to-rely-on-a-different-feature-to-be-discovered/)
- [Secondary, single case] One developer's reported comparison: Popular Upcoming gave 700K impressions, 1.56% CTR, 11K visits; Personal Calendar gave 100K impressions, 31.26% CTR, 33K visits. Reported via a search summary; I did not open the original post. — [games.gg](https://games.gg/news/steam-popular-upcoming-indie-personal-calendar/)
- [Secondary] The Personal Calendar reportedly graduated from Steam Labs to a full Store feature in October 2026. — [GamesRadar](https://www.gamesradar.com/games/the-best-thing-valve-has-added-to-steam-in-years-just-graduated-to-full-feature/)
- [Valve] "With a few exceptions like the Popular Upcoming tab, wishlists are not a factor" in algorithmic visibility. Wishlisters get an email at launch, when a game leaves Early Access, and when it is discounted 20% or more. — [Steamworks: Visibility on Steam](https://partner.steamgames.com/doc/marketing/visibility)

**How wishlists accumulate**
- [Opinion, 2022] Zukowski: each festival yields roughly 1,000-3,000 wishlists; paid ads cost about $1 per wishlist in his experience; if a game is stuck near 3,000 wishlists after 6+ months of trying everything, he advises releasing instead of buying ads. — [HTMAG archive](https://howtomarketagame.com/2026/06/25/archive-how-many-wishlists-should-i-have-when-i-launch-my-game/)
- [Data] Steam Next Fest, February 2026: see section 5 for wishlist gains by starting size.

### Inferences
- A solo first release with under 5,000 launch wishlists should plan on roughly 15% week-1 conversion at the median: 2,000 wishlists implies about 300 copies in week one, with a real chance of far fewer.
- Since Valve says wishlists are not an algorithmic input outside Popular Upcoming, wishlists are best read as a measure of demand and a launch-day email list, not as a lever on the algorithm.
- The GameDiscoverCo finding on long pre-release periods (411 vs 214 days) is a correlation; it does not show that a long Coming Soon period harms a game.

### Gaps
- No reliable first-year multiple was found in this pass. Rules of thumb such as "first year = 2-5x first week" circulate, but I did not retrieve a 2023-2026 source, so none is stated here.
- The Personal Calendar entry threshold (8,000-30,000) and the new Popular Upcoming bar (100,000) are estimates; Valve has published no number.
- The HTMAG Personal Calendar article was only partly readable (page truncated), so its detailed advice is not captured.

## 2. Steam's algorithm and visibility surfaces

### Takeaway
Valve states that visibility follows purchases and playtime: money and play are the "strong signal", while page traffic, conversion rate, wishlists (outside Popular Upcoming) and review score above 40% are not algorithmic inputs. The "10 reviews" rule is an analyst claim built on one documented fact (no review score is shown below 10 reviews), not a Valve-stated visibility trigger.

### Cited Findings
- [Valve] Purchases and play are "a strong signal to Steam that there is interest in your game". The main capsule is "driven by what players spend time and money on, rather than Valve curation". — [Steamworks: Visibility on Steam](https://partner.steamgames.com/doc/marketing/visibility)
- [Valve] Store page traffic "is not a factor in your Steam store visibility" and conversion rate "is not a factor in visibility on Steam". Paying for visibility: "Nope." — [Steamworks: Visibility on Steam](https://partner.steamgames.com/doc/marketing/visibility)
- [Valve] "As long as your game's reviews are Mixed or above (40%+), review score is not a factor in algorithmic visibility." Below 40% the game "will be less likely to be featured". — [Steamworks: Visibility on Steam](https://partner.steamgames.com/doc/marketing/visibility)
- [Valve] Full releases first appear in a New Releases queue built to favour titles "that have the least amount of views since release"; they appear in New & Trending "if the title is doing well" and can drop off fast in crowded weeks. Steam is more likely to show a game to players who speak a language it supports. — [Steamworks: Visibility on Steam](https://partner.steamgames.com/doc/marketing/visibility)
- [Valve] Tags: "Steam categorizes games by using a tagging system"; Valve recommends rerunning the tag wizard. — [Steamworks: Visibility on Steam](https://partner.steamgames.com/doc/marketing/visibility)
- [Data/observation, August 2023] GameDiscoverCo on New & Trending: it is a yes/no flag for 1.0 releases (Early Access launches are not eligible), usually decided within minutes of release, set per region (20+ regional charts), sorted by release date, and held until about ten newer games are added. An estimated 5-10% of weekly releases get it. The threshold is unknown; revenue alone cannot be the metric because free games appear; one game reportedly qualified with about 100 concurrent players. Valve has made no statement. A reader comment claims games drop out when reviews turn Mixed; another reader disputes that. — [GameDiscoverCo, Aug 2023](https://newsletter.gamediscover.co/p/how-does-steams-new-and-trending)
- [Opinion] Zukowski: Steam has a tuned expectation of success; games that meet early sales thresholds get shown more and games that sell less get shown less. — [HTMAG archive](https://howtomarketagame.com/2026/06/25/archive-how-many-wishlists-should-i-have-when-i-launch-my-game/)
- [Data, February 2025] HTMAG Discovery Queue benchmark, impressions in the 10 days after launch: Bronze 22,000 (54% of traffic); Silver 126,000 (45%); Gold 250,000 (45%); Diamond 665,000 (32%). — [HTMAG benchmarks](https://howtomarketagame.com/benchmarks/)
- [Opinion, January 2022, old] Zukowski: the first 10 reviews from real purchasers are the most important; he says a game has almost no store visibility until it has them, and that they need not all be positive. — [HTMAG, 2022](https://howtomarketagame.com/2022/01/25/why-your-first-10-reviews-are-the-most-important/)
- [Secondary] Below 10 reviews Steam shows no review score ("needs more user reviews"); reviews from key activations do not count toward the score. — [Automaton](https://automaton-media.com/en/news/steam-developers-need-your-review-more-than-you-think-even-if-its-literally-just-one-word/)
- [Data, April 2026] Share of new releases that never reach 10 reviews: 58.1% in Q1 2024, 63.2% in Q1 2026 (VG Insights data sampled by Zukowski). — [HTMAG Q1 2026](https://howtomarketagame.com/2026/05/14/2026-q1-games/)

### Inferences
- Launch-week revenue matters because Valve's stated inputs are purchases and playtime; a weak first days means the Discovery Queue and New & Trending show the game less. This is consistent between Valve's text and analyst observation, but no source quantifies the revenue thresholds.
- Even bronze-tier games get about 22,000 Discovery Queue impressions after launch, so every released game gets a small test audience; the capsule and page decide what happens with it.
- Supporting more languages widens the pool of players Steam will show the game to (Valve statement), which is a cheap lever for a text-light game.

### Gaps
- Valve documents no "10 reviews" visibility trigger. The page I read does not mention it. Whether the Discovery Queue boost follows the tenth review is unverified analyst lore.
- No public number exists for the New & Trending threshold or for the revenue levels that extend launch visibility.
- I did not read Valve's Personal Calendar documentation page directly.

## 3. Genre and hook

### Takeaway
Genre is one of the strongest measurable predictors: in 2025 about 3% of all releases reached 1,000 reviews, but the rate ran from about 21% for open-world survival craft down to 0.2-0.3% for puzzle and 2D platformers. Tower defense sat at 1.76% and roguelike deckbuilders at 5.1%.

### Cited Findings
- [Data] Zukowski, 2025 full year (VG Insights data): games reaching 1,000+ reviews / games released = 337 / 12,304 (2.74%) in 2022; 354 / 13,834 (2.56%) in 2023; 445 / 18,239 (2.44%) in 2024; 608 / 20,282 (2.99%) in 2025. Of the 608, 579 were AA or indie. He calls 1,000 reviews "real Steam", typically about $150,000+ revenue, the level where Valve features such as Daily Deals open up. — [HTMAG, Jan 2026](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
- [Data] Same study, 2025 share of releases in a genre that reached 1,000 reviews (2024 in brackets; release counts are tag-based approximations): Open World Survival Craft 20.8% (24.47%), 15 of 72; Farming 8.3% (20.83%); Roguelike Deckbuilder 5.1% (6.71%), 11 of 212; Simulation 4.1% (3.76%); Management 3.4% (5.43%); Horror 3.2% (1.81%); Idle 2.79% (3.05%), 27 of 965; RPG 2.4% (1.46%); Racing 2.1%; Tower Defense 1.76% (1.44%), 9 of 511; Automation 1.19%; Metroidvania 1.1%; Colony Sim 1.0%; RTS 0.9%; Souls-like 0.8%; City Builder 0.5% (2.70%); Puzzle 0.34% (0.36%), 14 of 4,022; 2D Platformer 0.18% (0.25%), 3 of 1,658; VR 0.27%. — [HTMAG, Jan 2026](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
- [Data] Top genres by number of 1,000-review games in 2025: Narrative 51 (FMV games from China inflate this; 32 without them), Simulation 43, Horror 39, RPG 28, Idle/Incremental 27, Roguelike 22, Sexual content 21, Multiplayer Shooter 21, Shooter 21, Management 19. Nine of the ten match 2024; "not much changes in a 4-5 year period". Vampire-Survivors-likes were in the 2023 top 10 with 17 games and absent from the 2025 top 10. — [HTMAG, Jan 2026](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
- [Data] Q1 2026: 5,971 games released, about 23% more than the year before; projected 25,799 for 2026 against 20,853 in 2025. 1,000+ review games in Q1: 88 (2.2%) in 2024, 96 (1.6%) in 2026. Tower defense produced 1, 2 and 1 hits in Q1 of 2024, 2025 and 2026. Two Vampire-Survivors-likes broke through in Q1 2026 (R.I.P., Vital Shell). No 2D platformers and no VR games among the top games. Zukowski states roughly 75% of yearly releases come from first-time developers, hobbyists or shovelware. — [HTMAG Q1 2026](https://howtomarketagame.com/2026/05/14/2026-q1-games/)
- [Opinion] Zukowski on roguelike deckbuilders: a sweet spot between relatively easy to make, easy to market, and a large audience; they are not flooding Steam as often claimed. — [HTMAG, Jan 2026](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
- [Secondary, different metric] A Steam revenue report cited by PC Gamer defines a hit as over $100K revenue: sandbox tag 27.3% hit rate, puzzle 9.5%, 2D platformer 5.5%, hidden object 5.4%. Not comparable with the 1,000-review measure. — [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)
- [Secondary] GamesRadar reports Zukowski describing a current "golden age" of rough-but-fun games that small teams make quickly (PEAK, Megabonk cited), with Steam players wanting "fun first". — [GamesRadar](https://www.gamesradar.com/games/steam-expert-hails-pc-gaming-golden-age-of-rough-but-fun-games-that-devs-can-make-quickly-and-players-love-from-peak-to-megabonk-steam-players-want-fun-first)

### Inferences
- For a 2D action roguelite / tower-defense hybrid, the base rates are: Roguelike is a top-6 genre by hit count (22 hits in 2025), tower defense converts at 1.76%, below the 2.99% all-genre rate, and the survivors-like wave has cooled since 2023. Leading the store page with the roguelite/horde identity and treating tower defense as the twist matches the stronger tag.
- The genre rates are for reaching about $150K+; they say nothing about the odds of a modest outcome such as $5-20K.

### Gaps
- I found no primary source in this pass that defines "hook" or "Steam-shaped". These are Zukowski terms; without the original text I will not paraphrase a definition. Commonly the terms are used for (a) a one-sentence, visibly distinctive premise and (b) games in the genres Steam's audience buys (deep, replayable, systems-driven PC games), but treat that as unsourced.
- No roguelite-specific or survivors-like-specific success rate for 2025 was found beyond the hit counts above.
- Gamalytic and VG Insights genre reports were not read directly.

## 4. Store page assets

### Takeaway
There is little rigorous public evidence on effect sizes for capsules, trailers or screenshots. What exists is Valve's requirements, behavioural observation (shoppers decide in seconds and often skip the trailer) and single-game case studies.

### Cited Findings
- [Valve] Store page requirements: at least five screenshots tagged as gameplay; at least one trailer marked as gameplay; capsule and library art must contain artwork and the game name only; descriptions must not contain prices, dates or links. — [Steamworks: Review process](https://partner.steamgames.com/doc/store/review_process)
- [Valve] Page traffic and conversion rate are not visibility factors, so page quality works through sales, not through the algorithm directly. — [Steamworks: Visibility on Steam](https://partner.steamgames.com/doc/marketing/visibility)
- [Observation, older] A Game Developer analysis of how users browse found the hover preview cycles through the first four screenshots, not the trailer, so the author ranks screenshot choice above the trailer. — [Game Developer](https://gamedeveloper.com/business/how-steam-users-see-your-game)
- [Secondary/Opinion] Zukowski's browsing research is reported as finding that many shoppers skip the trailer; his advice to cut to gameplay within about two seconds is described by the citing site as a hypothesis, not a measured threshold. — [Position Is Everything](https://www.positioniseverything.net/indie-game-trailer-views-but-no-wishlists-a-data-first-fix/)
- [Case study, 2020, old] Zukowski compared two games' click-through rates of 9.6% and 6.7%; another HTMAG post is titled "How one new image increased sales by 20x". Single cases. — [HTMAG, 2020](https://howtomarketagame.com/2020/04/13/how-one-new-image-increased-sales-by-20x/)
- [Case, 2026] Personal Calendar impressions carried a 31.26% CTR in one developer's report against 1.56% on Popular Upcoming, and developers discussed reworking capsule art for the calendar. — [games.gg](https://games.gg/news/steam-popular-upcoming-indie-personal-calendar/)

### Inferences
- Because the capsule is the only asset shown on most surfaces (Discovery Queue, Personal Calendar, lists), it is the highest-leverage asset by exposure, even though no study isolates its effect.
- The first four screenshots should each show clear gameplay, since they are what the hover preview shows.

### Gaps
- No controlled study with effect sizes for capsule art, trailer opening seconds, short description or tags was found. Figures such as "4% CTR unlocks more visibility" or "70% watch without sound" appear on vendor blogs without sources and contradict Valve's statement that CTR is not a visibility factor; they are excluded.
- No current HTMAG CTR or visit-to-wishlist benchmark was retrieved.

## 5. Demos and Steam Next Fest

### Takeaway
Next Fest multiplies existing momentum and does not create it: the wishlists a game brings in is the best predictor of what it earns (r = 0.825), and the median small game gains only a few hundred. Demos should go live well before the fest.

### Cited Findings
- [Data] HTMAG survey, February 2026 Next Fest, 182 self-reported games. Median wishlists earned by wishlists held the day before: 0-999 = 322 (n=71); 1,000-9,999 = 1,006 (n=60); 10,000-99,999 = 5,215 (n=36); 100,000+ = 12,882 (n=7). Spearman correlation of pre-fest wishlists with fest wishlists = 0.825. — [HTMAG Next Fest benchmarks](https://howtomarketagame.com/2025/03/26/benchmarks-how-many-wishlists-can-i-get-from-steam-next-fest/)
- [Data] Same survey, by pre-fest wishlist velocity: 0-10 per day = 358 median earned; 11-100 per day = 1,470; 100+ per day = 10,229. — [HTMAG Next Fest benchmarks](https://howtomarketagame.com/2025/03/26/benchmarks-how-many-wishlists-can-i-get-from-steam-next-fest/)
- [Data] Same survey: share of demo players who also wishlisted, median 16.33% (30th percentile 12%, 70th percentile 20%). Zukowski says the rate does not predict success but a low rate signals a problem. — [HTMAG Next Fest benchmarks](https://howtomarketagame.com/2025/03/26/benchmarks-how-many-wishlists-can-i-get-from-steam-next-fest/)
- [Data] Same survey: games that released their demo well before the fest earned about 2.5x the wishlists of those that released it in the promotion window; the correlation is weak (r = -0.205) with heavy overlap. Advice: polish the demo beforehand, do not shadow-drop it, use a separate demo page, aim for 2,000+ wishlists before the fest. — [HTMAG Next Fest benchmarks](https://howtomarketagame.com/2025/03/26/benchmarks-how-many-wishlists-can-i-get-from-steam-next-fest/)
- [Data] HTMAG Next Fest tiers, February 2026: Bronze 0-999 wishlists earned; Silver 1,000-6,999; Gold 7,000-9,999; Diamond 10,000+. — [HTMAG benchmarks](https://howtomarketagame.com/benchmarks/)
- [Data, October 2022, old] Demo median play time by lifetime-revenue tier: Bronze 7 minutes; Silver 18; Gold 38; Diamond 65. — [HTMAG benchmarks](https://howtomarketagame.com/benchmarks/)
- [Data, October 2024] Median of 5.26 demo players per wishlist at Next Fest; demo-on-main-page and separate-demo-page medians were 967 and 930 wishlists, a negligible difference. — [HTMAG, Nov 2024](https://howtomarketagame.com/2024/11/04/how-was-the-october-2024-steam-next-fest/)
- [Opinion] Zukowski: "Demos unlock visibility. It allows you to get content creators. It allows you to get festivals, word of mouth, Steam algorithms." In his 2022 fest review the top earners had built streamer relationships well before the festival. — [GamesRadar](https://gamesradar.com/games/valve-knows-it-i-know-it-and-you-need-to-know-it-steam-expert-tells-indie-devs-to-give-away-demos-because-actually-playing-a-game-beats-all-other-marketing); [HTMAG, 2022](https://howtomarketagame.com/2022/07/11/june-2022-steam-next-fest-how-did-these-games-earn-so-many-wishlists/)

### Inferences
- A first game entering Next Fest with under 1,000 wishlists should expect roughly 300-500 more, not thousands. The fest is best used once, late, after the demo has already been live and tested with creators.
- Median demo play time is a usable quality signal before launch: under about 10 minutes sits in the bronze band, 30+ minutes in the gold band (2022 data).

### Gaps
- No quantified effect of streamer or YouTuber coverage on demo wishlists was found; the evidence is qualitative.
- The play-time benchmark is from 2022; no newer tiered figure was found. A "14 minute overall median" appears on a secondary site and was not verified.
- A game may take part in only one Next Fest; I did not re-verify that rule against Valve's documentation in this pass.

## 6. Reviews

### Takeaway
Review score changes buyer behaviour far more than it changes the algorithm: Valve says score is not an algorithmic factor above 40%, but data links Mixed scores to sharply lower wishlist conversion and Overwhelmingly Positive to roughly double the median.

### Cited Findings
- [Valve] Score is not a factor in algorithmic visibility at Mixed or above (40%+); below 40% a game is less likely to be featured. — [Steamworks: Visibility on Steam](https://partner.steamgames.com/doc/marketing/visibility)
- [Data, May 2024] Gamalytic sample (about 700 games, 5,000+ wishlists): Overwhelmingly Positive games (95%+ with more than 500 reviews) had median month-1 sales of 0.51x launch wishlists against 0.27x overall; games below 70% showed "significant conversion dropoffs" (no figure given in text). — [GameDiscoverCo, May 2024](https://newsletter.gamediscover.co/p/how-user-reviews-affect-your-games)
- [Data, 2025] First-week median user score: 67% for games that under-performed their wishlists, 91% for those that over-performed. — [Game Dev Reports summary of GameDiscoverCo](https://gamedevreports.substack.com/p/gamediscoverco-the-state-of-steam)
- [Secondary, July 2026] GameDiscoverCo survey of about 3,800 active Steam users: 51.1% become less likely to buy when the rating is Mixed or below, and a further 20.3% are wary of anything below Very Positive. Respondents skew toward committed Steam users. — [ixbt.games](https://ixbt.games/en/news/2026/07/25/mnogix-pokupatelei-otpugivaiut-smesannye-otzyvy-v-steam-analitiki-izucili-reakciiu-igrokov-na-reiting-igr.html)
- [Data] Sales per review (Boxleiter ratio) per HTMAG: 2020 = 31; 2021 = 20-55 with median 31 (old). GameDiscoverCo reported about 30 sales per review for games above 90% positive and about 60 for games near 70%. — [HTMAG benchmarks](https://howtomarketagame.com/benchmarks/); [Game Dev Reports](https://gamedevreports.substack.com/p/gamediscoverco-and-gamalytic-insights)
- [Data] Review-count distribution of Q1 2026 releases: 0-9 reviews 63.2%; 10-50 reviews 23.4%; 1,000+ reviews 1.6%. — [HTMAG Q1 2026](https://howtomarketagame.com/2026/05/14/2026-q1-games/)

### Inferences
- Using about 30 sales per review, the 10-review mark corresponds to roughly 300 copies; almost two thirds of releases never get there.
- The practical target is Very Positive (80%+): it avoids the roughly 20% of buyers who hesitate below that tier. Launch bugs are therefore a sales risk, not only a quality one.

### Gaps
- No source quantifies the sales difference between Mostly Positive, Very Positive and Overwhelmingly Positive individually.
- The July 2026 survey was read only through secondary coverage.

## 7. Pricing and discounts

### Takeaway
Valve recommends a 10-15% launch discount, and the median price of best-selling new games has been falling toward the $10-15 indie band. No roguelite-specific price study was found.

### Cited Findings
- [Valve, via search summary of the Steamworks discounting and pricing pages] Launch discounts are recommended at around 10-15%, run 7 to 14 days, are capped at 40%, and must be set up before release. Ordinary discounts must be between 10% and 95%. A product cannot be discounted within 30 days of release, within 30 days of the launch discount ending, or for 30 days after a price increase in any currency. Steam supports pricing in 37 currencies. — [Steamworks: Discounting](https://partner.steamgames.com/doc/marketing/discounts); [Steamworks: Pricing](https://partner.steamgames.com/doc/store/pricing)
- [Valve] Wishlist emails go out for discounts of 20% or more. — [Steamworks: Visibility on Steam](https://partner.steamgames.com/doc/marketing/visibility)
- [Data] GameDiscoverCo: median price of the top 50 new Steam releases by copies sold fell from $19.50 (February 2023) to $15.64 (October 2025), down 20%; ranked by launch revenue it fell from $23.70 to $20.35, down 14%. Analysts note players now compare value against $10-15 indie hits. — [GamesRadar](https://www.gamesradar.com/games/the-median-price-of-best-selling-new-games-on-steam-has-dropped-in-the-past-2-years-research-finds-charging-usd25-is-getting-trickier-as-players-compare-value-to-the-usd10-usd15-indie-titles)
- [Data] Games priced above $10 convert launch wishlists at a lower median rate in week one (0.10x against 0.15x for all games above 25,000 wishlists). — [Game Dev Reports summary of GameDiscoverCo](https://gamedevreports.substack.com/p/gamediscoverco-the-state-of-steam)

### Inferences
- A launch discount of 10-15% will not trigger the wishlist discount email (20% threshold), but the launch itself triggers its own email, so the smaller discount loses nothing there.
- The 30-day rule means the launch discount choice also fixes when the first later sale can happen; check the season sale calendar before choosing the release date.

### Gaps
- No data on typical price bands for small indie roguelites or survivors-likes specifically ($4.99-$14.99 is the range usually quoted, but I found no sourced distribution).
- Nothing was retrieved on whether to accept Valve's suggested regional prices or the revenue effect of doing so.
- The discount rules were read from search summaries of Valve's pages, not from a full fetch; verify in Steamworks before setting a discount. One Valve page reportedly notes changes to the discount section are coming in 2027.

## 8. Baseline reality

### Takeaway
The typical new Steam game earns a few hundred dollars. About two thirds earn under $1,000, about one in ten earns $50,000 or more, and about 3% reach the roughly $150K "1,000 reviews" level, with over 20,000 games released per year.

### Cited Findings
- [Data, estimate] Gamalytic, games first released 1 January to 21 October 2025: median revenue $249 (2024: $222); 66% earned under $1,000; 9.9% earned $50,000 or more; 40% did not earn back the $100 fee; average revenue $358,900. Units: 47.5% sold under 100 copies; 28% sold 100-1,000; 16% sold 1,000-10,000; 5.4% sold 10,000-50,000; 1.2% sold 50,000-100,000; 1.8% sold over 100,000. — [80.lv, Oct 2025](https://80.lv/articles/analysts-report-drop-in-game-revenue-on-steam-despite-growing-number-of-releases)
- [Data] Releases per year (Zukowski, VG Insights data): 12,304 in 2022; 13,834 in 2023; 18,239 in 2024; 20,282 in 2025 (20,853 in a later count); projected 25,799 for 2026. — [HTMAG, Jan 2026](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/); [HTMAG Q1 2026](https://howtomarketagame.com/2026/05/14/2026-q1-games/)
- [Data] 1,000+ review games: 608 of 20,282 in 2025 (2.99%). 63.2% of Q1 2026 releases have fewer than 10 reviews. — [HTMAG, Jan 2026](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/); [HTMAG Q1 2026](https://howtomarketagame.com/2026/05/14/2026-q1-games/)
- [Opinion] Zukowski: about 75% of yearly releases are from first-time developers, hobbyists or shovelware, so the raw median understates the odds for a competent, marketed game. — [HTMAG Q1 2026](https://howtomarketagame.com/2026/05/14/2026-q1-games/)
- [Secondary, conflicting] A different "Steam Revenue Report" gives a median of $1,728 for paid games released in 2026 as of 1 September; different method, not comparable with Gamalytic's $249. — [PC Gamer](https://www.pcgamer.com/games/with-over-13-000-new-games-on-steam-this-year-so-far-over-a-third-of-them-havent-even-made-enough-to-break-even-on-valves-submission-fee)

### Inferences
- With 16% of games selling 1,000-10,000 copies and about 8% selling more, roughly three quarters of releases sell under 1,000 copies. Selling 1,000 copies already puts a game in the top quarter.
- The median figures include free and abandoned hobby releases; a realistic planning range for a first solo game with a few thousand wishlists is the bronze-to-low-silver band (under $10K to low tens of thousands), not the median of $249 and not the hit stories.

### Gaps
- No direct figure for the share earning under $10,000 was found; only under $1,000 (66%) and $50,000+ (9.9%).
- All figures are third-party estimates; Valve publishes no distribution.

## 9. Steam Direct requirements and timelines

### Takeaway
A first release needs about a month at minimum after paying the fee: $100 per app, a waiting period after payment, a public Coming Soon page for at least two weeks, and separate reviews of the store page and the build. AI-generated content that ships in the game must be disclosed in the Content Survey.

### Cited Findings
- [Valve] Fee: "$100 USD (or equivalent) fee for each new app"; recoupable "after your product has at least $1,000.00 Adjusted Gross Revenue"; "The Steam Direct Fee is not refundable." — [Steamworks: Steam Direct fee](https://partner.steamgames.com/doc/gettingstarted/appfee)
- [Valve] Onboarding: sign the NDA and Steam Distribution Agreement, pay the fee, complete bank, tax and identity verification. Tax verification "may take up to 30 days". The legal name must be used (no alias), and the bank account holder name must match it. — [Steamworks: Onboarding](https://partner.steamgames.com/doc/gettingstarted/onboarding)
- [Valve, conflict flagged] The onboarding page as fetched on 27 November 2026 states "A 21-day waiting period between when you paid the app fee and when you can release that game" for a partner's first titles. The widely cited figure is 30 days (it is also the figure in this project's brief). I saw 21 days in a machine summary of the page; confirm the current number in Steamworks. — [Steamworks: Onboarding](https://partner.steamgames.com/doc/gettingstarted/onboarding)
- [Valve] The store page must be approved and set to Coming Soon for "at least 2 weeks" before release. Store page review "typically takes 3-5 business days"; submit the page at least 7 business days before it should go live. The store page must be submitted before the build can be. Approved games do not release themselves; the developer presses Release. — [Steamworks: Release process](https://partner.steamgames.com/doc/store/releasing); [Steamworks: Review process](https://partner.steamgames.com/doc/store/review_process)
- [Valve] Build review checks include: at least one gameplay trailer, published pricing, one depot and one build live on the default branch, the game launched through Steam for at least five minutes in the past 7 days, install directory set, the game installs and launches on a clean machine and quits without crashing, and that claimed features work: achievements, Steam Cloud (saves must sync), controller support, languages. — [Steamworks: Review process](https://partner.steamgames.com/doc/store/review_process)
- [Valve] AI disclosure in the Content Survey. Two categories: Pre-Generated (content made with AI tools during development that ships with the game and is consumed by players) and Live-Generated (content made by AI while the game runs). The developer must describe the AI use and confirm the content is not illegal or infringing and matches the marketing. Live-Generated content also requires describing the guardrails that stop illegal output. Efficiency tools are out of scope: "Efficiency gains through the use of these tools is not the focus of this section." Live-generated Adult Only Sexual Content is not permitted. — [Steamworks: Content Survey](https://partner.steamgames.com/doc/gettingstarted/contentsurvey)

### Inferences
- Minimum calendar from paying the fee to release is driven by the longest of: the post-payment waiting period (21 or 30 days), tax verification (up to 30 days), and store page review plus two weeks of Coming Soon (about 3-4 weeks). Commercially, the data in sections 1 and 5 argues for a much longer Coming Soon period than the two-week minimum.
- For this project, code written with an AI assistant falls under the efficiency-tool exclusion as Valve words it, while any AI-generated art, audio or text that ships to players (including capsules and store art if AI-made) must be declared as Pre-Generated.
- The build review tests the features the page claims, so only tick achievements, cloud saves and controller support once they work through the Steam client.

### Gaps
- The page I read does not say whether the AI disclosure text is displayed on the public store page. It has been shown there since Valve's January 2024 policy, but I did not re-verify the current behaviour.
- Build review duration is not stated on the pages read (the onboarding page says reviews typically take 1-5 days).
- The 21-day versus 30-day waiting period is unresolved (see above).
