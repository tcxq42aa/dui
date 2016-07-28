/**
 * Created by charles on 16/7/22.
 */
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        resource: ["./lib/resource"]
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[id].js",
        path: './bundles',
        publicPath: '/bundles',
        library: '[name]',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.html', '.css']
    },
    // Turn on sourcemaps
    devtool: 'source-map',
    // Add minification
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts'},
            {test: /\.json/, loader: 'json'},
            // {
            //     test: /\.css$/,
            //     exclude: '/tools',
            //     loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            // },
            {
                test: /\.css$/,
                // include: '/tools',
                loader: 'raw'
            },
            {
                test: /\.html/,
                loader: 'raw'
            }
        ]
    }
}