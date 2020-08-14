'use strict'

const webpack = require('webpack');
const { merge } = require('webpack-merge')
const path = require('path');
const base = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../example'),
    publicPath: './',
    filename: 'build.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'vue-picture-cropper',
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true// 压缩内联css
      },
      filename: 'index.html',
      template: 'public/index.html'
    })
  ],
  performance: {
    hints: false
  },
});
