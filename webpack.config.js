/**
 * Created by charles on 16/8/5.
 */
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    entry: {
        doc: './src/doc/main'
    },
    output: {
        path: path.join(__dirname, 'dist/doc'),
        filename: 'asset/[name].js',
        publicPath: "/",
        libraryTarget: 'umd'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/doc/index.html'
        }),
        new ExtractTextPlugin("asset/[name].css")
    ],
    externals: [
        /^@angular\/.+/,
        /^dui2\/.+/
    ],
});