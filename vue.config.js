const { defineConfig } = require('@vue/cli-service')
// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/vue2-gh-pages/'  // 仓库名必须与实际一致
    : '/'
}