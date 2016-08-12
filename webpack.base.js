/**
 * Created by charles on 16/8/5.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        'vendor': ['./src/dui/lib/polyfills.ts', './src/dui/lib/angular.ts'],
        'directive': './src/dui/component/index'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    devtool: 'source-map ',

    output: {
        path: helpers.root('dist/doc'),
        publicPath: '/',
        filename: 'assets/[name].js',
        chunkFilename: '[id].chunk.js',
        library: '[name]',
        libraryTarget: 'umd'
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        contentBase: './dist/doc',
        port: 8080
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html?interpolate&minimize=false'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(/systemjs/, /^$/),
        new ExtractTextPlugin('assets/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'directive', 'vendor']
        }),
        new HtmlWebpackPlugin({
            template: './src/doc/index.html',
            favicon: './src/dui/images/favicon.ico'
        }),
        new CopyWebpackPlugin([
            // {output}/file.txt
            { from: './src/doc/server.js' },
            { from: './src/doc/package.json' }

            // {output}/to/file.txt
            // { from: 'from/file.txt', to: 'to/file.txt' }
        ])
    ]
};