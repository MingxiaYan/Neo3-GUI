const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

let mainWindow;

const urlLocation = isDev ? "http://localhost:3000" : "null";

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 680,
    webPreferences: {
      nodeIntegration: true, //是指在render process中可以使用node
    },
  });
  mainWindow.loadURL(urlLocation);
});
