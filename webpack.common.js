/**
 * Created by charles on 16/7/29.
 */
var webpack = require('webpack');

var plugins = [new webpack.ContextReplacementPlugin(/system/, /^$/)];
if(process.env.NODE_ENV == 'prod') {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
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
            {test: /\.js$/, loader: 'source-map-loader'},
            {test: /\.json/, loader: 'json'},
            {
                test: /\.css$/,
                loader: 'raw'
            },
            {
                test: /\.html/,
                loader: 'raw'
            }
        ]
    }
}