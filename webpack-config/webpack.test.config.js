'use strict'

const {merge} = require('webpack-merge')
const path = require('path');
const base = require('./webpack.base.config')

module.exports = merge(base, {
    entry: './test/main.js',
    output: {
        path: path.resolve(__dirname, '../test'),
        publicPath: '/test/',
        filename: 'build.js'
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        host: 'localhost',
        port: 8070,
        proxy: {
            '/fflist': {
                target: "http://localhost:8090",
                changeOrigin: true,
            }
        }
    },
    performance: {
        hints: false
    },
    devtool: 'eval-source-map'
})
