/**
 * Created by charles on 16/7/29.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

var plugins = [
    new webpack.ContextReplacementPlugin(/system/, /^$/)];
if(process.env.NODE_ENV == 'prod') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        }
    }));
}

module.exports = {
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.html', '.css']
    },
    plugins: plugins,
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts'},
            {test: /\.json/, loader: 'json'},
            {
                test: /\.html/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap'),
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass?sourceMap')
            },
            // {
            //     test: /\.scss$/,
            //     loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
            // }
        ]
    }
}