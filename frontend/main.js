const { app, BrowserWindow } = require('electron')
const { startBackend, killBackend } = require('./src/backendController')

app.on('ready', () => {
    const win = new BrowserWindow({width: 800, height: 600})

    win.loadFile('static/index.html')
})

app.on('window-all-closed', () => {
    killBackend()
    app.quit()
})

startBackend()