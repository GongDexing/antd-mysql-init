var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: {
    //将react的库文件单独打包，避免bundle文件过大
    vendor: ['react','react-dom','react-redux','redux', 'redux-thunk'],
    app: path.resolve(APP_PATH, 'index.js')
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash:5].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015', 'react'],
          plugins: [["antd", { "style": true }]]
        }
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less']
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|ico)$/,
        loader: 'url?limit=8192'
      },
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: '智能推送',
      template: 'template.ejs'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
