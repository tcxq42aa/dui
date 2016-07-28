/**
 * Created by charles on 16/7/25.
 */
System.register(["reflect-metadata", "rxjs", '@angular/platform-browser', '@angular/platform-browser-dynamic', '@angular/core', '@angular/common', '@angular/http', '@angular/http/testing', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var System;
    var exportedNames_1 = {
        'System': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (platform_browser_1_1) {
                exportStar_1(platform_browser_1_1);
            },
            function (platform_browser_dynamic_1_1) {
                exportStar_1(platform_browser_dynamic_1_1);
            },
            function (core_1_1) {
                exportStar_1(core_1_1);
            },
            function (common_1_1) {
                exportStar_1(common_1_1);
            },
            function (http_1_1) {
                exportStar_1(http_1_1);
            },
            function (testing_1_1) {
                exportStar_1(testing_1_1);
            },
            function (router_1_1) {
                exportStar_1(router_1_1);
            }],
        execute: function() {
            require('zone.js/dist/zone');
            if (process.env.ENV === 'production') {
            }
            else {
                // Development
                Error['stackTraceLimit'] = Infinity;
                require('zone.js/dist/long-stack-trace-zone');
            }
            // import 'systemjs';
            exports_1("System", System = require('systemjs'));
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
        }
    }
});
//# sourceMappingURL=resource.js.map