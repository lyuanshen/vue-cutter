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
<<<<<<< HEAD
        host: '192.168.31.50',
=======
        host: 'localhost',
>>>>>>> bd23d1067cbae2ed1481f70ed6dda19e08337643
        port: 8088,
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
