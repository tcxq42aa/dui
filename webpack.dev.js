/**
 * Created by charles on 16/8/9.
 */
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.base.js');

module.exports = webpackMerge(commonConfig, {
    entry: {
        'app': ['webpack/hot/dev-server', './src/doc/main.ts']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css!sass?sourceMap'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false)
        })
    ]
});