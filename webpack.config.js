var path = require('path');

module.exports = {

  entry: path.resolve(__dirname, 'build', 'test.js'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.json$/, loader: 'json' }
    ]
  }

};
