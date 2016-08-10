/**
 * Created by charles on 16/7/22.
 */
import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {SidebarComponent} from "./component/sidebar/sidebar.component";
import {SidebarDirective} from "./component/sidebar/sidebar.directive";
import {StartComponent} from "./page/start/start.component";
import {CssComponent} from "./page/css/css.component";
import {ComponentsComponent} from "./page/components/components.component";
import {PluginsComponent} from "./page/plugins/plugins.component";
require("../dui/style/main.scss");
require("./style.scss");
require("./app.component.scss");

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: require('./app.component.html'),
    directives: [ROUTER_DIRECTIVES, SidebarComponent, SidebarDirective],
    precompile: [StartComponent, CssComponent, ComponentsComponent, PluginsComponent]
})
export class AppComponent {}