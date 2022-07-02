#!/usr/bin/env node
// const LwjLib = require('lwj-lib')
// //console.log('lwj-cli11')
// // console.log(LwjLib.add(1,2))
// /**
//  * !demo
//  * lwj create --name test
//  * lwj --version
//  * lwj -V
//  */
// const argv1 = require('minimist')(process.argv.slice(3));
// console.log(argv1)
// const argv = require('process').argv
// console.log(argv)
// const command = argv[2]

// if(!command) {
//   console.log('请输入指令')
//   return
// }

// if (command.startsWith('--') || command.startsWith('-') ) {
//   const globalOption = command.replace(/-/g,'')
//   if (globalOption === 'V' || globalOption === 'version') {
//     console.log('1.0.0')
//   }
//   return
// }

// const options = argv.slice(3)
// console.log(options)
// if (options.length) {
//   let [option, param] = options
//   option = option.replace('--','')
//   console.log(option, param)

//   if (LwjLib[command]) {
//     LwjLib[command]({option, param})
//   } else {
//     console.log('无效的指令')
//   }
// } else{
//   console.log('请传入正确的参数')
// }

const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const dedent = require('dedent')

const argv = hideBin(process.argv) // !hideBin is a shorthand for process.argv.slice(2)

console.log(argv)

const cli = yargs(argv);
cli
  .usage("Usage: lwj <command> [options]")
  .demandCommand(1, "A command is required. Pass --help to see all available commands and options.")
  .strict()
  .alias("h", "help")
  .alias("v", "version")
  //.wrap(cli.terminalWidth())
  // !epilogue：结尾加文字阐述；dedent：可以控制换行，去除前后空白处
  .epilogue(dedent`
    When a command fails, all logs are written to lerna-debug.log in the current working directory.

    For more information, find our manual at https://github.com/lerna/lerna
  `)
  .options({ // !Global Options
    debug: {
      type: 'boolean',
      describe: 'debug mode',
      alias: 'd'
    }
  })
  .option('registry', { // !Global Options
    type: 'string',
    describe: 'Define global registry',
    alias: 'r'
  })
  .group(['debug'], 'Dev Options:')
  .group(['registry'], 'Extra Options:')
  .command('init [name]', 'Do init a project', (yargs) => {
    yargs.option('name', { // !lwj init --name a
      type: 'string',
      describe: 'project name',
      alias: 'n'
    })
    //.usage("Usage: lwj init [name]")
  }, (argv) => { // !lwj init lwb -d -r npm 根据传入的参数继续干
    console.log(argv)
  })
  .command({
    command: 'list',
    aliases: ['ls', 'la', 'll'],
    describe: 'List local pkgs',
    builder:(yargs) => {}, // !美化参数
    handler:(argv) => { // !处理器
      console.log(argv)
    }
  })
  .argv // !添加默认的--help、 --version的options