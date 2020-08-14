const dev = require('./webpack-config/webpack.dev.config');
const example = require('./webpack-config/webpack.example.config');
const prod = require('./webpack-config/webpack.prod.config');

let finalModule = {};
let ENV = process.env.NODE_ENV;

switch (ENV) {
  case 'dev' : finalModule = dev; break;
  case 'example' : finalModule = example; break;
  case 'prod': finalModule = prod; break;
}

module.exports = finalModule;
