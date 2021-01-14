const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

console.log(app);

let mainWindow;

const urlLocation = isDev ? "http://localhost:3000" : "null";

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 680,
    webPreferences: {
      nodeIntegration: true, //是指在render process中可以使用node
      preload: path.join(__dirname, "./preload.js"),
    },
  });
  mainWindow.loadURL(urlLocation);
});
