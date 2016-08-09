/**
 * Created by charles on 16/8/5.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'vendor': ['./src/dui/lib/polyfills.ts','./src/dui/lib/angular.ts'],
        'app': './src/doc/main.ts',
        'directive': './src/dui/component/index'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    output: {
        path: helpers.root('out'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        library: '[name]',
        libraryTarget: 'umd'
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
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
        new webpack.ContextReplacementPlugin(/system/, /^$/),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'directive', 'vendor']
        }),

        new HtmlWebpackPlugin({
            template: 'src/doc/index.html'
        })
    ]
};