
const path = require('path')

module.exports = {
  entry: './bin/core.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'core.js'
  },
  mode: 'development', // development production
  target: 'node', // !默认是web，不会对nodejs的如path模块这种进行处理。
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|dist)/,
      //   use: {
      //     loader: 'babel-loader', // !其实对高版本的nodejs，都不需要babel
      //     // options: {
      //     //   presets: ['@babel/preset-env']
      //     // }
      //   }
      // }
    ]
  }
}