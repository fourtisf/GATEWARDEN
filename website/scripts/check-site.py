#!/usr/bin/env python3
"""Sanity check for the Gatewarden website. Usage: python3 scripts/check-site.py [site_dir]
Exits non-zero on any problem. Used by CI and safe to run locally (stdlib only)."""
import os, re, sys, subprocess, tempfile


def find_site():
    if len(sys.argv) > 1:
        return sys.argv[1]
    for d in ("site", "website/site"):
        if os.path.isfile(os.path.join(d, "index.html")):
            return d
    sys.exit("FAIL: no site/index.html or website/site/index.html found")


d = find_site()
errs = []
html = open(os.path.join(d, "index.html"), encoding="utf-8").read()

for f in ("index.html", "config.js", "robots.txt"):
    if not os.path.isfile(os.path.join(d, f)):
        errs.append(f"missing {f}")
if "fonts.googleapis" in html or "fonts.gstatic" in html:
    errs.append("index.html still loads Google Fonts (must be local)")
if 'src="config.js"' not in html:
    errs.append("index.html does not load config.js")

# every local file referenced from index.html must exist
refs = set(re.findall(r'(?:src|href|content)="((?:fonts|assets)/[^"]+)"', html))
refs |= set(re.findall(r"url\(((?:fonts|assets)/[^)]+)\)", html))
for r in sorted(refs):
    if not os.path.isfile(os.path.join(d, r)):
        errs.append(f"missing referenced file {r}")

# no external scripts/styles
for m in re.findall(r'<(?:script|link)[^>]+(?:src|href)="(https?://[^"]+)"', html):
    errs.append(f"external resource {m}")

cfg = open(os.path.join(d, "config.js"), encoding="utf-8").read()
if "window.GW_CONFIG" not in cfg:
    errs.append("config.js does not define window.GW_CONFIG")
if re.search(r"^(?!\s*//).*\bdev\s*:\s*true", cfg, re.M):
    errs.append("config.js has dev: true (unlock-all test button would be public)")

# JS syntax check if node is available
try:
    js = "\n".join(re.findall(r"<script>([\s\S]*?)</script>", html))
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as t:
        t.write(js)
        p = t.name
    for f in (p, os.path.join(d, "config.js")):
        r = subprocess.run(["node", "--check", f], capture_output=True, text=True)
        if r.returncode:
            errs.append(f"JS syntax error in {os.path.basename(f)}: {r.stderr.strip()[:300]}")
    os.unlink(p)
except FileNotFoundError:
    print("note: node not found, skipped JS syntax check")

if errs:
    print("FAIL")
    for e in errs:
        print(" -", e)
    sys.exit(1)

demo = "true" if re.search(r"^(?!\s*//).*\bdemo\s*:\s*true", cfg, re.M) else "false"
print(f"OK: {d} is ready to deploy ({len(refs)} local files referenced, demo={demo})")
