/**
 * Created by charles on 16/7/29.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

var plugins = [
    new webpack.ContextReplacementPlugin(/system/, /^$/),
    new ExtractTextPlugin("[name].css")];
if(process.env.NODE_ENV == 'prod') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        }
    }));
}

console.log(helpers.root('component', 'src'));
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
            }
        ]
    }
}