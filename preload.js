const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    // This maps your frontend call to an Electron IPC message
    loadPage: (pageName) => ipcRenderer.send('navigate-to-page', pageName)
});
