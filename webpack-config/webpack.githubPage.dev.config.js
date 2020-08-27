'use strict'

const webpack = require('webpack');
const {merge} = require('webpack-merge');
const path = require('path');
const base = require('./webpack.base.config');

module.exports = merge(base, {
  entry: './home/main.js',
  output: {
    path: path.resolve(__dirname, '../home'),
    publicPath: '/home/',
    filename: 'build.js'
  },
  devServer: {
    contentBase: '../home/public/index.html',
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    host: '192.168.38.1',
    port: 8070,
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map'
});
