/**
 * Created by charles on 16/8/5.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var isProd = process.env.NODE_ENV == 'prod';

var plugins = [
    new webpack.ContextReplacementPlugin(/system/, /^$/),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'directive', 'vendor']
    }),
    new HtmlWebpackPlugin({
        template: 'src/doc/index.html'
    })
];

if(isProd) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
    entry: {
        'vendor': ['./src/dui/lib/polyfills.ts', './src/dui/lib/angular.ts'],
        'app': ['webpack/hot/dev-server', './src/doc/main.ts'],
        'directive': './src/dui/component/index'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    output: {
        path: helpers.root('dist/doc'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        library: '[name]',
        libraryTarget: 'umd'
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        contentBase: './out'
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
                loader: isProd ? ExtractTextPlugin.extract('style', 'css?sourceMap') : 'style-loader!css'
            },
            {
                test: /\.scss$/,
                loader: isProd ? ExtractTextPlugin.extract('css!sass?sourceMap') : 'style-loader!css!sass'
            }
        ]
    },

    plugins: plugins
};