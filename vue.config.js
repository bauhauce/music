const path = require('path')

module.exports = {
  publicPath: '/music/dist/',
  configureWebpack: {
    resolve: {
      alias: {
        api: path.resolve(__dirname, './src/api'),
        common: path.resolve(__dirname, './src/common'),
        assets: path.resolve(__dirname, './src/assets')
      }
    }
  }
}
