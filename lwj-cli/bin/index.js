#!/usr/bin/env node
const ora = require('ora');

let spinner = ora('上传读取sourcemap...\n').start();
setTimeout(() => {
    spinner?.stop();
    require('../dist/core') // !或者 '..\\dist\\core'
}, 1000)
