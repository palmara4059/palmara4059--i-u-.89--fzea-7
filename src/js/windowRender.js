const minimizeBtn = document.getElementById('minimizeBtn');
const maxResBtn = document.getElementById('maximizeBtn')
const closeBtn = document.getElementById('closeBtn');
const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;
closeBtn.addEventListener('click', () => { ipc.send('closeApp') })
minimizeBtn.addEventListener('click', () => { ipc.send('minimizeApp') })

function changeMaxResBtn(isMaximizedApp) {
  if (isMaximizedApp) { maxResBtn.title = 'Restore', maxResBtn.classList.remove('maximizeBtn'), maxResBtn.classList.add('restoreBtn') }
  else { maxResBtn.title = 'Maximize', maxResBtn.classList.remove('restoreBtn'), maxResBtn.classList.add('maximizeBtn') }
}

maxResBtn.addEventListener('click', () => { ipc.send('maximizeRestoreApp') })
ipc.on('isMaximized', () => { changeMaxResBtn(true) })
ipc.on('isRestored', () => { changeMaxResBtn(false) })