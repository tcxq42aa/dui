/**
 * Created by charles on 16/7/25.
 */

import "reflect-metadata";
import "rxjs";
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}

export * from '@angular/platform-browser';
export * from '@angular/platform-browser-dynamic';
export * from '@angular/core';
export * from '@angular/common';
export * from '@angular/http';
export * from '@angular/http/testing';
export * from '@angular/router';

// import 'systemjs';
export var System = require('systemjs');

(function (global) {
    function loadScript(url, callback?) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.async = false;
            script.onload = function (e) {
                console.log(e);
                resolve(e);
            }
            script.type = 'text/javascript';
            script.src = url;
            head.appendChild(script);
        });
    }

    var head = document.getElementsByTagName('head')[0],
        currentScript = document.currentScript,
        configFile = currentScript.getAttribute('data-config'),
        mainFile = currentScript.getAttribute('data-main'),
        host = currentScript.getAttribute('src').match(/^.+\//)[0],
        task = [];


    var map = {
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    };
    var packages = {
        'angular2-in-memory-web-api': {main: 'index.js', defaultExtension: 'js'},
    };
    var ngPackageNames = ['common', 'compiler', 'core', 'forms', 'http', 'http/testing', 'platform-browser', 'platform-browser-dynamic', 'router', 'router-deprecated', 'upgrade'];
    var ngModule = System.newModule(exports);
    ngPackageNames.forEach(function (pkgName) {
        System.set('@angular/' + pkgName, ngModule);
        global['@angular/' + pkgName] = exports;
    });

    var moduleName = 'dui2/', modulePackage = ['core'];
    ;
    modulePackage.forEach(function (pkgName) {
        map[moduleName + pkgName] = host + pkgName + '.js';
    });

    if (configFile) {
        task.push(loadScript(configFile));
    }

    if (mainFile) {
        Promise.all(task).then(function (e) {
            System.import(mainFile).catch(function (err) {
                console.error(err);
            });
        });
    }

    var config = {
        map: map,
        packages: packages
    };
    System.defaultJSExtensions = true;
    System.config(config);
    var originalFn = System.config;
    System.config = function (obj) {
        originalFn.apply(this, [merge(config, obj)]);
    }

    function merge(source, target) {
        for (var k in target) {
            if (target.hasOwnProperty(k)) {
                if (!source[k]) {
                    source[k] = target[k];
                } else if (typeof target[k] === 'object' && !(target[k] instanceof Array)) {
                    source[k] = merge(source[k], target[k]);
                }
            }
        }
        return source;
    }

})(window);