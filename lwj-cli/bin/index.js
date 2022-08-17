#!/usr/bin/env node
const ora = require('ora');

let spinner = ora('上传读取sourcemap...\n').start();
setTimeout(() => {
    spinner?.stop();
}, 1000)

require('../dist/core')