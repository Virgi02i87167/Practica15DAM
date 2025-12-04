const { contextBridge} = require('electron');

contextBridge.exposeInMainWorld('api', {
    saludar: () => console.log('Sistena listo')
});