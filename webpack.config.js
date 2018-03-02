//使用绝对路径
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'
const config = {
  target: 'web',
  //入口；__dirname表示当前文件webpack.config.js所在地址也就是根目录
  //path。join()表示把当前路径和后面的路径拼接起来形成绝对路径,以保证文件一定能被访问到
  entry: path.join(__dirname, 'src/index.js'),
  //出口，把文件输出
  output: {
    filename: 'bundle.js',
    //输出路径
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      //加载.vue文件,/\.正则中.的转译
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      //加载css文件,把css写到html中去
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          'stylus-loader'
        ]
      },
      //图片加载
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-aaa.[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin()
  ]
}

if(isDev) {
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: 8000,
    host: 'localhost',
    overlay: {
      errors: true,
    },
    // 自动打开网页
    open: true,
    // historyFallback: {

    // }
    // 只更新更改的组件
    hot :true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}
module.exports = config