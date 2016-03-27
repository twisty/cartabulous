/*eslint-env node */

var path = require('path');

module.exports = {

    devtool: 'source-map',

    entry: path.resolve(__dirname, 'example', 'app.js'),

    output: {
        path: path.resolve(__dirname, 'example'),
        filename: 'build.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.json$/, loader: 'json' }
        ]
    }

};
