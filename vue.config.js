// vue.config.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const webpack=require('webpack')
module.exports = {
  publicPath: './',
  devServer: {
    // 热启动
    open: true,
    // 端口号
    port: 8080
  },
  configureWebpack: (config) => {
    config.entry.app = ['babel-polyfill', './src/main.js']
    //删除console插件
    let plugins = [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log']
          },
          output: {
            // 去掉注释内容
            comments: false,
          }
        },
        sourceMap: false,
        parallel: true,
      }),
      new FileManagerPlugin({
        onEnd: {
          archive: [{
            source: './dist',
            destination: `./dist/gh-camp-video-portal-h5-${process.argv.splice(2)[2]}.tar.gz`,
            format: 'tar',
            options: {
              gzip: true,
              gzipOptions: {
                level: 1
              },
              globOptions: {
                nomount: true
              }
            }
          }]
        }
      }),
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
      //只有打包生产环境才需要将console删除
      if (process.env.NODE_ENV == 'production') {
        config.plugins = [...config.plugins, ...plugins]
      }
  }
}