'use strict'

const {merge} = require('webpack-merge')
const path = require('path');
const base = require('./webpack.base.config')

module.exports = merge(base, {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dev'),
        publicPath: '/dev/',
        filename: 'build.js'
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        host: 'localhost',
        port: 8088
    },
    performance: {
        hints: false
    },
    devtool: 'eval-source-map'
})
