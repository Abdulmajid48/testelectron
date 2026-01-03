import { app, BrowserWindow } from "electron";

let mainWindow;

const initialize = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadFile("./index.html");
};

app.whenReady().then(() => {
  initialize();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      initialize();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
