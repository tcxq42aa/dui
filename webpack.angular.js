/**
 * Created by charles on 16/7/22.
 */
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    entry: {
        angular: ['./src/dui/lib/polyfills.ts','./src/dui/lib/angular.ts'],
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[id].js",
        path: './dist/lib',
        libraryTarget: 'umd'
    }
});