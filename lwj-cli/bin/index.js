#!/usr/bin/env node

const commander = require('commander') // !视频里的版本是 7.3.4  我们用最新版本9.4.0
const pkg = require('../package.json')

// !获取commander单例
//const {program} = commander
// !实例化一个Command示例
const program = new commander.Command();

program
  .name(Object.keys(pkg.bin)[0])
  .usage('<command> [options]')
  .version(pkg.version)
  .option('-d, --debug', '是否开启调试模式', false) // !program.debug为false；false为默认值
  .option('-e, --envName <envName>', '设置环境变量名称')

// program.outputHelp()
//console.log(program.opts())
//console.log(program.version())

// !command注册命令
const clone = program.command('clone <source> [destination]')
clone
  .description('clone sth')
  .option('-f, --force', '是否强制克隆')
  .action((source,destination,cmdObj) => { // !lwj clone 12 asd -f
    console.log('do clone')
    console.log(source,destination,cmdObj)
  })

// !addCommand 注册子命令，相当于命令的分组功能
const service = new commander.Command('service');
service
  .command('start [port]')
  .description('start server at xx port')
  .option('-f, --force', '是否强制克隆')
  .action((port,cmdObj) => { // !lwj service start 1024
    console.log('start server at ' + port, cmdObj)
  })

service
  .command('stop [port]')
  .description('stop server at xx port')
  .action((port) => {
    console.log('stop server at ' + port)
  })

program.addCommand(service)
// !--------------------addCommand 注册子命令结束

// !当.command()有第二个参数时，就意味着使用独立的可执行文件作为子命令。
//program.command('install [name]', 'install package') // !相当于找 'I:\vue\lwj\lwj-install'的package.json的main入口，找不到就报错
program.command('install [name]', 'install package',{ // !lwj install axios
  executableFile: 'lwj-lib', // !executableFile相当于找'I:\vue\lwj\lwj-lib'的package.json的main入口，executableFile相当于指定需要用到的包
  //isDefault: true, // !命令行直接lwj，就执行'I:\vue\lwj\lwj-lib'，这个会取代.arguments('<cmd> [options]')的功能。
  //hidden: true // !lwj -h 找不到当前命令
}) 


program
  .arguments('<cmd> [options]') // !会匹配上面注册的命令以外的其他命令。
  .description('test')
  .action((cmd,options) => { // !lwj test 1
    console.log(cmd, options)
  })

program.parse(process.argv) // !很重要，这个要放到最后。