const { app, BrowserWindow } = require("electron")
const path = require("path")

let mainWindow

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 960,
		minWidth: 960,
		height: 450,
		minHeight: 450,
		// frame: false,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
			// preload: path.join(__dirname, 'preload.js'),
		},
		autoHideMenuBar: true,
	})

	mainWindow.maximize()
	mainWindow.loadURL("http://localhost:3000")
}

app.whenReady().then(() => {
	createWindow()
})

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit()
	}
})

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})
