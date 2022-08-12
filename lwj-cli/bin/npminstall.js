
const npminstall = require('npminstall');
const path = require('path')
const userHome = require('user-home')

npminstall({
  root: path.resolve(userHome, '.imooc-cli-dev'), // !安装的根目录
  pkgs: [
    { name: 'foo', version: '~1.0.0' },
  ],
  registry: 'https://registry.npmjs.org',
  // debug: false,
  storeDir: path.resolve(userHome, '.imooc-cli-dev', 'node_modules'),
});