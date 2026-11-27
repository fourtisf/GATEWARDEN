// Pre-build sanity checks.  `npm run check` (dev) or `npm run check:release` (before uploading to Steam).
'use strict';
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const release = process.argv.includes('--release');
let errors = 0, warns = 0;
const err = (m) => { errors++; console.error('  ✗ ' + m); };
const warn = (m) => { warns++; console.warn('  ! ' + m); };
const ok = (m) => console.log('  ✓ ' + m);
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

console.log(`Gatewarden check (${release ? 'RELEASE' : 'dev'})`);
const html = read('game/index.html');
ok(`game/index.html ${(html.length / 1024).toFixed(0)} KB`);
if (/fonts\.googleapis|https?:\/\/(?!store\.steampowered)/.test(html.replace(/https:\/\/[^"' ]*w3\.org[^"' ]*/g, ''))) err('game/index.html references the internet — Steam builds must work offline');
else ok('no external network references');
for (const f of ['outfit-latin-400-normal.woff2', 'outfit-latin-700-normal.woff2', 'silkscreen-latin-400-normal.woff2', 'silkscreen-latin-700-normal.woff2'])
  if (!fs.existsSync(path.join(root, 'game/fonts', f))) err('missing font ' + f);
const m = html.match(/const ACH=\[([\s\S]*?)\];/);
const ids = m ? [...m[1].matchAll(/\{id:'(\w+)'/g)].map((x) => x[1]) : [];
if (!ids.length) err('could not read the ACH list from game/index.html');
const achJson = JSON.parse(read('steam/achievements.json'));
const apiNames = new Set(achJson.map((a) => a.api_name));
for (const id of ids) {
  const api = 'GW_' + id.toUpperCase();
  if (!apiNames.has(api)) err(`achievement ${id} missing from steam/achievements.json (${api})`);
  for (const suf of ['', '_locked']) if (!fs.existsSync(path.join(root, 'steam/achievement_icons', api + suf + '.jpg'))) err(`missing icon ${api}${suf}.jpg`);
}
ok(`${ids.length} achievements mapped to Steam API names`);
const cfg = JSON.parse(read('steam.config.json'));
const pkg = JSON.parse(read('package.json'));
const vdf = read('steam/app_build.vdf') + read('steam/depot_windows.vdf');
if (cfg.appId === 480) (release ? err : warn)('steam.config.json appId is 480 (Valve test app) — set your real AppID');
if (/YOUR_(APP|WINDOWS_DEPOT|LINUX_DEPOT)_ID/.test(vdf)) (release ? err : warn)('steam/*.vdf still contains YOUR_*_ID placeholders');
if (/YOUR_STUDIO_NAME/.test(JSON.stringify(pkg))) (release ? err : warn)('package.json author/copyright still says YOUR_STUDIO_NAME');
if (/com\.yourstudio\./.test(pkg.build.appId)) warn('package.json build.appId is still com.yourstudio.gatewarden');
if (!fs.existsSync(path.join(root, 'build/icon.png'))) err('build/icon.png missing');
console.log(errors ? `\n${errors} error(s), ${warns} warning(s)` : `\nOK (${warns} warning(s))`);
process.exit(errors ? 1 : 0);
