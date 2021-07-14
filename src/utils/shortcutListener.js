const { globalShortcut, ipcMain } = require("electron");

const registerShortcuts = () => {
  globalShortcut.register("q", () => {
    ipcMain.send("navigate-left");
  });
  globalShortcut.register("d", () => {
    ipcMain.send("navigate-right");
  });
  globalShortcut.register("z", () => {
    ipcMain.send("navigate-up");
  });
  globalShortcut.register("s", () => {
    ipcMain.send("navigate-down");
  });
};

module.exports = registerShortcuts;
