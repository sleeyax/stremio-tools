const path = require('path');
const rimraf = require('rimraf');

function rmDir(dir, name = '') {
    rimraf(dir, (err) => {
        if (err) {
            console.error(err);
            console.log('Is stremio running? Close it and try again')
        }else{
            console.log('Successfully cleared ' + name + ' cache');
        }
    });
}

module.exports = {
    clearServerCache: () => {
        const cache = path.join(process.env.APPDATA, 'stremio', 'stremio-server', 'stremio-cache');
        rmDir(cache, 'server');
    },
    clearQMLCache: () => {
        const cache = path.join(process.env.LOCALAPPDATA, 'Smart Code ltd', 'Stremio', 'cache', 'qmlcache');
        rmDir(cache, 'QML');
    },
    clearQTWebEngineCache : () => {
        const cache = path.join(process.env.LOCALAPPDATA, 'Smart Code ltd', 'Stremio', 'cache', 'QtWebEngine', 'Default', 'Cache');
        rmDir(cache, 'QT Web Engine');
    },
    cleanDriveCache: (drive) => {
        const cache = path.join(drive, 'stremio-cache');
        rmDir(cache, 'Drive');
    }
};
