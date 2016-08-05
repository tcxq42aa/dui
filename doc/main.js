"use strict";
/**
 * Created by charles on 16/7/22.
 */
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var core_2 = require("dui2/core");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders,
    { provide: common_1.APP_BASE_HREF, useValue: '/' },
    { provide: core_1.PLATFORM_DIRECTIVES, useValue: core_2.DUI_DIRECTIVES, multi: true }
]);
//# sourceMappingURL=main.js.map