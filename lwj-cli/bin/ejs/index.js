const ejs = require('ejs')
const path = require('path')
const fs = require('fs')
const glob = require('glob')

const str = '<h2><%= user.name %></h2>'
const options = {}
const data = {
  user: {
    name: 'lwj'
  }
}
const data2 = {
  user: {
    name: 'lwb'
  }
}

let template = ejs.compile(str, options); // !这种方式就是复用了template
console.log(template(data))
console.log(template(data2))
// => Rendered HTML string

console.log(ejs.render(str, data, options)) // !这种方式就是一次性
// => Rendered HTML string

// !要放在ejs.renderFile之前才生效。
ejs.fileLoader = (filePath) => {
  return `
    <div>
      ${fs.readFileSync(filePath).toString()}
    </div>
  `
}
const filename = path.resolve(__dirname, 'index.html')
// !方式1
ejs.renderFile(filename, data, options, function(err, str){
  console.log(str)
});
// !方式2
ejs.renderFile(filename, data, options).then((res) => { // !这种方式就是先读取filename的str，然后执行ejs.render(str, data, options)
  console.log(res)
})



glob('**/*.js', {
  ignore: ['node_modules/**', 'webpack.config.js'],
  cwd: process.cwd(),
  nodir: true // !不要文件夹
}, (err, file) => {
  console.log('🚀🚀 ~ err', err);
  console.log('🚀🚀 ~ file', file);
})


// <%: script 标签，用于流程控制，不会输出在页面上
// <%_: 删除其前面的空格符
// <%=: 输出数据到模板（输出是转义 HTML 字符串）
// <%-: 输出非转义的数据到模板
// <%#: 注释标签，不执行，不输出内容
// <%%: 输出字符串 <%
// %>: 一般结束标签
// -%>: 删除后序的换行符
// -%>: 将结束后的空格符删除

