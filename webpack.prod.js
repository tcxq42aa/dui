/**
 * Created by charles on 16/8/9.
 */
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.base.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    entry: {
        'app': './src/doc/main.ts',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass?sourceMap')
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            }
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true)
        })
    ],
});