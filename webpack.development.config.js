'use strict';

/**
 * Module dependencies.
 */
var path = require('path');
var webpack = require('webpack');

// webpack-dev-server port
var PORT = 3000;

/**
 * Webpack development configuration.
 */
module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:' + PORT, // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        path.join(__dirname, '/app/main.js') // app entry point
    ],

    output: {
        path: path.join(__dirname, '/app/build/'),
        filename: '[name].js',
        publicPath: 'http://localhost:' + PORT + '/app/build'
    },

    devServer: {
        quiet: true, // don't output anything to the console
        inline: true, // embed the webpack-dev-server runtime into the bundle
        port: PORT
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['env', 'react', 'react-hmre']
                }
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    devtool: 'eval-source-map'
};
