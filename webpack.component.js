/**
 * Created by charles on 16/7/22.
 */
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    entry: {
        'core': ["./src/component/src/core"],
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[id].js",
        path: './dist/component',
        libraryTarget: 'umd',
    },
    externals: [
        /^@angular\/.+/
    ]
});