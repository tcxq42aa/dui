/**
 * Created by charles on 16/7/29.
 */
var path = require('path');
var url = require('url');

console.log(path.resolve(__dirname));
console.log(path.resolve(__dirname, ".."));
console.log(path.resolve("/dist/lib/angular.js", "../component/core.js"));
console.log(url.resolve('http://example.com/dist/lib/angular.js', '../component/'));