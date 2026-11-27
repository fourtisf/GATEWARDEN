// Gatewarden — preload bridge. Exposes a tiny, safe API to the game as window.gwNative.
'use strict';
const { contextBridge, ipcRenderer } = require('electron');
const info = ipcRenderer.sendSync('gw:info');
contextBridge.exposeInMainWorld('gwNative', {
  dev: !!info.dev,
  steam: !!info.steam,
  version: info.version,
  player: info.player || '',
  loadSave: () => ipcRenderer.sendSync('gw:load'),
  writeSave: (text) => ipcRenderer.send('gw:save', String(text)),
  achieve: (id) => ipcRenderer.send('gw:achieve', String(id)),
  toggleFullscreen: () => ipcRenderer.sendSync('gw:fullscreen'),
  setFullscreen: (v) => ipcRenderer.send('gw:setFullscreen', !!v),
  quit: () => ipcRenderer.send('gw:quit'),
});
