'use strict'

const webpack = require('webpack');
const {merge} = require('webpack-merge')
const path = require('path');
const base = require('./webpack.base.config')

module.exports = merge(base, {
  devtool: 'cheap-module-source-map',
  entry: './src/lib/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'index.js'
  },
  performance: {
    hints: false
  }
});

if (process.env.NODE_ENV === 'prod') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"prod"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
