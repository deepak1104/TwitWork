const {app, BrowserWindow} = require('electron')
const path = require('path')
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules/.bin/electron')
});

let mainWindow
 
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1300,
    height: 850,
    //fullscreen:true,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadFile('index.html')
  //mainWindow.removeMenu();
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
