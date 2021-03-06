const {app, BrowserWindow} = require('electron')

app.whenReady().then(() => { 

    var window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true
        },
        autoHideMenuBar: true,
    })

    window.maximize()
    window.loadURL('http://localhost:3000')
})