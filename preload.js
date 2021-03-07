const path = require('path');
const url = require('url');

const customTitlebar = require('custom-electron-titlebar');
const { Menu, MenuItem } = require('electron');

window.addEventListener('DOMContentLoaded', () => {

  var titlebar = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#202225'),
  });
  
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})