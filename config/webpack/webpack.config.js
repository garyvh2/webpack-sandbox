const path = require('path');

module.exports = {
  //...
  resolve: {
    alias: {
      '@config': path.resolve(__dirname, '../')
    },
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        include: [
          path.resolve(__dirname, '../settings')
        ],
        type: 'asset/resource',
        generator: {
          filename: 'settings/[name][ext]'
        }
      }
    ]
  }
};