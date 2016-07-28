/**
 * Created by charles on 16/7/25.
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
require("reflect-metadata");
require("rxjs");
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
__export(require('@angular/platform-browser'));
__export(require('@angular/platform-browser-dynamic'));
__export(require('@angular/core'));
__export(require('@angular/common'));
__export(require('@angular/http'));
__export(require('@angular/http/testing'));
__export(require('@angular/router'));
// import 'systemjs';
exports.System = require('systemjs');
(function (global) {
    function loadScript(url, callback) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.async = false;
            script.onload = function (e) {
                console.log(e);
                resolve(e);
            };
            script.type = 'text/javascript';
            script.src = url;
            head.appendChild(script);
        });
    }
    var head = document.getElementsByTagName('head')[0], currentScript = document.currentScript, configFile = currentScript.getAttribute('data-config'), mainFile = currentScript.getAttribute('data-main'), host = currentScript.getAttribute('src').match(/^.+\//)[0], task = [];
    var map = {
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    };
    var packages = {
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    };
    var ngPackageNames = ['common', 'compiler', 'core', 'forms', 'http', 'http/testing', 'platform-browser', 'platform-browser-dynamic', 'router', 'router-deprecated', 'upgrade'];
    var ngModule = exports.System.newModule(exports);
    ngPackageNames.forEach(function (pkgName) {
        exports.System.set('@angular/' + pkgName, ngModule);
        global['@angular/' + pkgName] = exports;
    });
    var moduleName = 'ngdui/', modulePackage = ['core'];
    ;
    modulePackage.forEach(function (pkgName) {
        map[moduleName + pkgName] = host + pkgName + '.js';
    });
    if (configFile) {
        task.push(loadScript(configFile));
    }
    if (mainFile) {
        Promise.all(task).then(function (e) {
            exports.System.import(mainFile).catch(function (err) {
                console.error(err);
            });
        });
    }
    var config = {
        map: map,
        packages: packages
    };
    exports.System.defaultJSExtensions = true;
    exports.System.config(config);
    var originalFn = exports.System.config;
    exports.System.config = function (obj) {
        originalFn.apply(this, [merge(config, obj)]);
    };
    function merge(source, target) {
        for (var k in target) {
            if (target.hasOwnProperty(k)) {
                if (!source[k]) {
                    source[k] = target[k];
                }
                else if (typeof target[k] === 'object' && !(target[k] instanceof Array)) {
                    source[k] = merge(source[k], target[k]);
                }
            }
        }
        return source;
    }
})(window);
//# sourceMappingURL=resource.js.map