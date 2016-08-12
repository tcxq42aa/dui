/**
 * Created by charles on 16/7/22.
 */
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    entry: {
        'core': ["./src/dui/component/directives"],
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[id].js",
        path: './dist/component',
        libraryTarget: 'umd',
    },
    externals: [
        /^@angular\/.+/
    ],
    plugins: [new ExtractTextPlugin("[name].css")]
});