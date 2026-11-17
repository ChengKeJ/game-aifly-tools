# game.aifly.tools — H5 Game Hall

100+ online mini-games, free to play in the browser. No download, no sign-up.

- **Live site:** https://game.aifly.tools (Cloudflare Pages, separate project from `aifly.tools` main site)
- **Repo:** https://github.com/ChengKeJ/game-aifly-tools
- **Monetization:** No AdSense on game pages (to protect the main aifly.tools AdSense account `pub-6064739425313900`). Revenue via in-game ads from GameMonetize as publisher (45% share).
- **Sourcing:** Licensed embeds via GameMonetize / GameDistribution + MIT open-source self-hosted games + own flagships (airplane shooter, kart racer). Do NOT rip games from CrazyGames / Poki without licence.
- **SEO:** Each game has its own page with unique title / description / how-to-play text. Subdomain is treated by Google as a separate entity from `aifly.tools` — no impact on the main site.

## Structure

- `index.html` — hall homepage, categories, search, featured games
- `games/<slug>/index.html` — one page per game (title, description, controls, play area, related games)
- `assets/` — CSS / JS
- `sitemap.xml`, `robots.txt`

## Deploy

Cloudflare Pages → Create project → Connect to Git `ChengKeJ/game-aifly-tools` → Framework: None / Static HTML → Build command empty, output directory `/` → Custom domain `game.aifly.tools` → Add `ads.txt` only if AdSense is ever added (currently NOT added on purpose).

## License note

Each game page lists its licence and attribution. MIT / Apache-2.0 / BSD games only for self-hosted copies. GameMonetize / GameDistribution embeds are used under their publisher terms.
