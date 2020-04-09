'use strict'

import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import {
  createProtocol,
  /* installVueDevtools */
} from 'vue-cli-plugin-electron-builder/lib'
import { autoUpdater } from "electron-updater"
autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"

const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

let shouldUpdate = false

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])

function checkupdate() {
  autoUpdater.setFeedURL('http://shulkerbox.orecraft.cn/download/latest/')
  autoUpdater.autoDownload = true
  autoUpdater.autoInstallOnAppQuit = false
  autoUpdater.checkForUpdates()
  autoUpdater.on('update-downloaded', () => {
    shouldUpdate = true
    win.webContents.send('update-downloaded')
  })
  autoUpdater.on('update-avaliable', () => {
    win.webContents.send('update-avaliable')
  })
  app.on('before-quit', () => {
    if (shouldUpdate) {
      autoUpdater.quitAndInstall(false)
    }
  })

}

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    title: 'ShulkerBox',
    minWidth: 500,
    minHeight: 500,
    backgroundColor: "#000000",
    webPreferences: {
      nodeIntegration: true,
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })

  win.on('maximize', () => {
    win.webContents.send('window-event', 'max')
  })
  win.on('unmaximize', () => {
    win.webContents.send('window-event', 'unmaximize')
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    // try {
    //   await installVueDevtools()
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }

  }
  createWindow()
  checkupdate()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

ipcMain.on('window', (event, arg) => {
  switch (arg) {
    case 'close':
      win.close()
      break;
    case 'min':
      win.minimize()
      break;
    case 'max':
      win.maximize()
      break;
    case 'unmaximize':
      win.unmaximize()
      break;
  }
})