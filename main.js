// Gatewarden — Electron main process
// Wraps game/index.html as a desktop app and connects it to Steam (achievements, overlay, cloud-friendly saves).
'use strict';
const { app, BrowserWindow, ipcMain, Menu, shell } = require('electron');
const path = require('path');
const fs = require('fs');

const CFG = require('./steam.config.json');
const DEV = !app.isPackaged || process.argv.includes('--dev');
app.setName('Gatewarden');

/* ---------------- Steam ---------------- */
let steamworks = null;
let steam = null;
if (CFG.enableSteam !== false) {
  try {
    steamworks = require('steamworks.js');
    // When released, relaunch through Steam if the exe was started directly (only when requireSteam is true).
    if (app.isPackaged && CFG.requireSteam && steamworks.restartAppIfNecessary(CFG.appId)) {
      app.quit();
    } else {
      steam = steamworks.init(CFG.appId);
      // Must be called before the app is ready: adds the Chromium switches the Steam overlay needs.
      steamworks.electronEnableSteamOverlay();
      console.log('[steam] initialised for app', CFG.appId, 'as', safe(() => steam.localplayer.getName()));
    }
  } catch (err) {
    steam = null;
    console.warn('[steam] not available (game still runs):', err && err.message);
  }
}
function safe(fn, fallback = null) { try { return fn(); } catch (e) { return fallback; } }

/* ---------------- Save file (Steam Auto-Cloud syncs this folder) ---------------- */
// Windows: %APPDATA%/Gatewarden/save/gatewarden-save.json
// Linux:   ~/.config/Gatewarden/save/gatewarden-save.json
// macOS:   ~/Library/Application Support/Gatewarden/save/gatewarden-save.json
const SAVE_DIR = path.join(app.getPath('userData'), 'save');
const SAVE_FILE = path.join(SAVE_DIR, 'gatewarden-save.json');
function readSave() {
  try { return fs.readFileSync(SAVE_FILE, 'utf8'); } catch (e) { return ''; }
}
function writeSave(text) {
  try {
    fs.mkdirSync(SAVE_DIR, { recursive: true });
    const tmp = SAVE_FILE + '.tmp';
    fs.writeFileSync(tmp, text, 'utf8');
    fs.renameSync(tmp, SAVE_FILE); // atomic replace: a crash never leaves a half-written save
  } catch (e) { console.error('[save] write failed', e); }
}
function savedFullscreen() {
  try { const s = JSON.parse(readSave() || '{}'); return !(s.settings && s.settings.fullscreen === false); } catch (e) { return true; }
}

/* ---------------- Window ---------------- */
let win = null;
function createWindow() {
  win = new BrowserWindow({
    width: 1600, height: 900, minWidth: 960, minHeight: 540,
    useContentSize: true,
    fullscreen: savedFullscreen(),
    backgroundColor: '#070b22',
    title: 'Gatewarden',
    icon: path.join(__dirname, 'build', 'icon.png'),
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      devTools: DEV,
      backgroundThrottling: false,
      autoplayPolicy: 'no-user-gesture-required',
      spellcheck: false,
    },
  });
  Menu.setApplicationMenu(null);
  win.once('ready-to-show', () => win.show());
  win.webContents.setVisualZoomLevelLimits(1, 1);

  // Security: the game never navigates or opens windows; links go to the system browser.
  win.webContents.on('will-navigate', (e) => e.preventDefault());
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https:\/\//.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });

  // F11 / Alt+Enter toggle fullscreen, F12 opens devtools in dev builds only.
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'F11' || (input.alt && input.key === 'Enter')) {
      e.preventDefault();
      setFullscreen(!win.isFullScreen());
      win.webContents.executeJavaScript('window.__gwFullscreenChanged && window.__gwFullscreenChanged(' + win.isFullScreen() + ')').catch(() => {});
    }
    if (DEV && input.key === 'F12') win.webContents.toggleDevTools();
  });

  win.loadFile(path.join(__dirname, 'game', 'index.html')).catch((e) => console.error('[load]', e && e.message));
}
function setFullscreen(v) {
  if (!win) return;
  win.setFullScreen(!!v);
  if (!v) { win.setContentSize(1600, 900); win.center(); }
}

/* ---------------- Bridge (see preload.js) ---------------- */
ipcMain.on('gw:info', (e) => {
  e.returnValue = { dev: DEV, steam: !!steam, version: app.getVersion(), player: steam ? safe(() => steam.localplayer.getName(), '') : '' };
});
ipcMain.on('gw:load', (e) => { e.returnValue = readSave(); });
ipcMain.on('gw:save', (e, text) => { writeSave(String(text || '')); });
ipcMain.on('gw:achieve', (e, id) => {
  if (!steam) return;
  const name = (CFG.achievementPrefix || 'GW_') + String(id).toUpperCase();
  try { if (!steam.achievement.isActivated(name)) steam.achievement.activate(name); }
  catch (err) { console.warn('[steam] achievement failed', name, err && err.message); }
});
ipcMain.on('gw:fullscreen', (e) => { setFullscreen(!win.isFullScreen()); e.returnValue = win.isFullScreen(); });
ipcMain.on('gw:setFullscreen', (e, v) => setFullscreen(v));
ipcMain.on('gw:quit', () => app.quit());

/* ---------------- Lifecycle ---------------- */
const single = app.requestSingleInstanceLock();
if (!single) {
  app.quit();
} else {
  app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
  app.whenReady().then(createWindow);
  app.on('window-all-closed', () => app.quit());
}
