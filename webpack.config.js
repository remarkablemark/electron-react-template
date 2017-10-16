'use strict';

/**
 * Module dependencies.
 */
var path = require('path');

/**
 * Export webpack config.
 */
module.exports = {
    entry: path.join(__dirname, '/app/main.js'),

    output: {
        path: path.join(__dirname, '/app/build/'),
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'env']
                }
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
