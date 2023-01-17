
import path from 'path'
import {exists} from './utils'

// !兼容系统，把  \  统一成   /
function formatPath(p) {
  if (p && typeof p === 'string') {
    // console.log(path.sep) // !windows系统返回\  mac返回/
    if (path.sep === '/') {
      return p
    } else {
      return p.replace(/\\/g, '/')
    }
  }
  return p
}

console.log(path.resolve('.'))
console.log(process.cwd())

console.log(exists(`D:\\web\\vue\\lwj\\lwj-cli`)) // !手动输入的这种注意要  转义
console.log(exists(`D:/web/vue/lwj/lwj-cli`)) 
console.log(exists(path.resolve('.'))); // !非手动输入的D:\web\vue\lwj\lwj-cli  可以
console.log(formatPath(path.resolve('.')))
console.log(exists(formatPath(path.resolve('.'))));

const LwjLib = require('lwj-lib')
console.log(LwjLib.add(1,2))

;(async function() {
  await new Promise((resolve) => {
    setTimeout(resolve,1000)
  })
  console.log(111111)
})()