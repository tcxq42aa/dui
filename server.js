/**
 * Created by charles on 16/8/8.
 */
var path = require('path');
var koa = require('koa');
var send = require('koa-send');
var serve = require('koa-serve');
var webpackDevServer = require('koa-webpack-dev');
var app = koa();

app.use(webpackDevServer({
    config: './webpack.config.js'
}));

app.use(serve('dui', path.resolve(__dirname, 'dist')));

app.use(function *(next){
    if(this.status == 404) {
        console.log('404.html', this.path);
        yield send(this, 'index.html', { root: __dirname + '/dist/doc' });
    } else {
        yield next;
    }
});

app.listen(8080);
console.log('listening on port 8080');