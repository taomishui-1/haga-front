// vue.config.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')
module.exports = {
  publicPath: './',
  // configureWebpack : {
  //     performance: {
  //         hints:'warning',
  //         //入口起点的最大体积 整数类型（以字节为单位）
  //         maxEntrypointSize: 50000000,
  //         //生成文件的最大体积 整数类型（以字节为单位 300k）
  //         maxAssetSize: 30000000,
  //         //只给出 js 文件的性能提示
  //         assetFilter: function(assetFilename) {
  //             return assetFilename.endsWith('.js')
  //         }
  //     },
  //     //生产环境删除console插件
  //     optimization: {
  //         minimizer: [
  //             new UglifyJsPlugin({
  //                 uglifyOptions: {
  //                     warnings: false,
  //                     compress: {
  //                         pure_funcs: ['console.log']//移除console
  //                     }
  //                 }
  //             })
  //         ]
  //     }
  // },
//   pluginOptions: {
//     "style-resources-loader": {
//         preProcessor: "less",
//         patterns: [
//           //这个是加上自己的路径，
//           //注意：试过不能使用别名路径
//           path.resolve(__dirname, "./src/assets/variable.less")
//          ]
//      }
//  },
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
      })
    ]
      //只有打包生产环境才需要将console删除
      if (process.env.NODE_ENV == 'production') {
        config.plugins = [...config.plugins, ...plugins]
      }
  }
}