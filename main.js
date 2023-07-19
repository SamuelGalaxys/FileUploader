const { app, ipcMain, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({});
    win.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
 
 
 
  //npm install -g electron-builder

  

 