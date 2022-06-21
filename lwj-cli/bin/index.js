#!/usr/bin/env node
const LwjLib = require('lwj-lib')
//console.log('lwj-cli11')
// console.log(LwjLib.add(1,2))
/**
 * !demo
 * lwj create --name test
 * lwj --version
 * lwj -V
 */
const argv = require('process').argv
console.log(argv)
const command = argv[2]

if(!command) {
  console.log('请输入指令')
  return
}

if (command.startsWith('--') || command.startsWith('-') ) {
  const globalOption = command.replace(/-/g,'')
  if (globalOption === 'V' || globalOption === 'version') {
    console.log('1.0.0')
  }
  return
}

const options = argv.slice(3)
console.log(options)
if (options.length) {
  let [option, param] = options
  option = option.replace('--','')
  console.log(option, param)

  if (LwjLib[command]) {
    LwjLib[command]({option, param})
  } else {
    console.log('无效的指令')
  }
} else{
  console.log('请传入正确的参数')
}
