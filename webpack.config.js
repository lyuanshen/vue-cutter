const dev = require('./webpack-config/webpack.dev.config');
const prod = require('./webpack-config/webpack.prod.config');
const test = require('./webpack-config/webpack.test.config');


let finalModule = {};
let ENV = process.env.NODE_ENV;

switch (ENV) {
  case 'dev' :
    finalModule = dev;
    break;
  case 'prod':
    finalModule = prod;
    break;
  case 'test':
    finalModule = test;
    break;
}

module.exports = finalModule;
