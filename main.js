const {app, BrowserWindow} = require('electron');

function createWindow() {
    let window = new BrowserWindow({
        width: 1200,
        minWidth: 700,
        height: 700,
        minHeight: 500,
        title: "English Vocabulary Help",
        darkTheme: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    window.loadFile('./src/index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.exit();
    }
});