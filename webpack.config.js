/**
 * Created by charles on 16/7/22.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        app: ["./app/main"],
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[id].js",
        path: './app',
        publicPath: '/app',
        libraryTarget: 'umd'
    },
    externals: [
        /^@angular\/.+/
    ],
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    // Turn on sourcemaps
    devtool: 'source-map',
    // Add minification
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin()
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ["bootstrap"]
        // })
        // new webpack.optimize.UglifyJsPlugin()
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