"use strict";
/**
 * Created by charles on 16/8/3.
 */
var router_1 = require('@angular/router');
var start_component_1 = require("./page/start/start.component");
var css_component_1 = require("./page/css/css.component");
var components_component_1 = require("./page/components/components.component");
var plugins_component_1 = require("./page/plugins/plugins.component");
var routes = [
    {
        path: 'start',
        component: start_component_1.StartComponent
    },
    {
        path: 'css',
        component: css_component_1.CssComponent
    },
    {
        path: 'components',
        component: components_component_1.ComponentsComponent
    },
    {
        path: 'plugins',
        component: plugins_component_1.PluginsComponent
    },
    {
        path: '**',
        redirectTo: 'start',
        pathMatch: 'full'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map