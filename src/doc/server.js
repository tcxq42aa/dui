/**
 * Created by charles on 16/8/9.
 */
var express = require('express');
var app = express();

app.use('/assets', express.static('assets'));

app.use(function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(3100, function () {
    console.log('doc app listening on port 3100!');
});