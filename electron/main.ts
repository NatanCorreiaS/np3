import { app, BrowserWindow, ipcMain, ipcRenderer } from "electron";
import fs from "node:fs";
import path from "node:path";

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.PUBLIC, "electron-vite.svg"),
    width: 800,
    height: 600,
    darkTheme: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      webSecurity: false,
      // devTools: true,
    },
  });

  win.webContents.openDevTools();

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }
}

app.on("ready", () => {
  createWindow();

  // Defina um valor inicial para a variável que deseja compartilhar
  // let sharedVariable = "Inicial";
  let directory = "";

  // Defina um manipulador de evento IPC para receber solicitações de atualização
  ipcMain.on("directory", (event, newValue) => {
    console.log("valor do diretorio: " + directory);
    directory = newValue;
    // Você pode enviar de volta uma confirmação se desejar
    event.reply("diretorio atualizado: ", directory);

    event.sender.send("directoryToRenderer", directory);
  });
});

ipcMain.on("directoryToMp3List", (event, data) => {
  const mp3Files: string[] = [];

  // reading the directory
  fs.readdirSync(data).forEach((file: string) => {
    const filepath = path.join(data, file);

    // checking if the file is a .mp3 file
    if (fs.statSync(filepath).isFile() && path.extname(filepath) === ".mp3") {
      mp3Files.push(filepath);
    }

    event.sender.send("Mp3Files", mp3Files);
    console.log("lista processada com sucesso!");
  });
});
app.on("window-all-closed", () => {
  win = null;
});
