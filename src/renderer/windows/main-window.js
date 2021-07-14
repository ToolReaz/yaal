import { BrowserWindow } from "electron";

export const mainWindow = new BrowserWindow({
  width: 800,
  height: 600,
  title: "Yaal",
  webPreferences: {
    nodeIntegration: true,
    enableRemoteModule: true, // Allow electron.remote
    contextIsolation: false, // Allow access of preload code in all process
    preload: path.join(__dirname,"..","..", "preload.js"), // Preload code to access electron in React components
  },
});
