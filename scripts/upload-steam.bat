@echo off
REM Builds Gatewarden for Windows and uploads it to Steam with SteamCMD.
REM Usage:  set STEAM_USER=your_build_account  then  scripts\upload-steam.bat
REM Needs:  steamcmd.exe on PATH (or set STEAMCMD=C:\path\to\steamcmd.exe)
setlocal
cd /d "%~dp0\.."
if "%STEAM_USER%"=="" ( echo Set STEAM_USER first & exit /b 1 )
if "%STEAMCMD%"=="" set STEAMCMD=steamcmd
call npm run check:release || exit /b 1
call npx electron-builder --win --x64 || exit /b 1
"%STEAMCMD%" +login %STEAM_USER% +run_app_build "%cd%\steam\app_build.vdf" +quit
echo Uploaded. Open Steamworks ^> SteamPipe ^> Builds and set the new build live on the 'default' branch.
