const path = require('path');

module.exports = {
  //...
  resolve: {
    alias: {
      '@config': path.resolve(__dirname, '../')
    },
  },
  output: {
    assetModuleFilename: '[name].[ext]'
  },
  module: {
    rules: [
      {
        test: /config.json/,
        type: 'asset/resource'
      }
    ]
  }
};