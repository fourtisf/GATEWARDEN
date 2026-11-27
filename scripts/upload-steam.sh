#!/usr/bin/env bash
# Builds Gatewarden and uploads it to Steam with SteamCMD.
# Usage:  STEAM_USER=your_build_account ./scripts/upload-steam.sh
# Needs:  steamcmd on PATH (https://developer.valvesoftware.com/wiki/SteamCMD) and a Steam account with build permissions.
set -euo pipefail
cd "$(dirname "$0")/.."
: "${STEAM_USER:?Set STEAM_USER to the Steam account that has build/upload permission}"
npm run check:release
case "$(uname -s)" in
  Linux*)  npx electron-builder --linux --x64 ;;
  Darwin*) echo "Build Windows on Windows (or CI) — macOS builds are not uploaded by default"; exit 1 ;;
  *)       npx electron-builder --win --x64 ;;
esac
steamcmd +login "$STEAM_USER" +run_app_build "$(pwd)/steam/app_build.vdf" +quit
echo "Uploaded. Open Steamworks > SteamPipe > Builds and set the new build live on the 'default' branch."
