const {app, BrowserWindow} = require('electron');

let mainWindow = null;

app.on('ready', () =>{
    console.log('Hello from electron');
    mainWindow = new BrowserWindow();
    mainWindow.loadURL(`file://${__dirname}/index.html`)
});