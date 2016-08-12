/**
 * Created by charles on 16/7/29.
 */
var path = require('path');
var _root = path.resolve(__dirname);
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}
exports.root = root;