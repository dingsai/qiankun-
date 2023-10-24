const { name } = require('./package')
module.exports = {
  devServer: {
    port: '8081',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: name,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}` // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    }
  }
}
