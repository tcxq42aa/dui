/**
 * Created by charles on 16/7/22.
 */
import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {SidebarDirective} from "./sidebar/sidebar.directive";
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES, SidebarComponent, SidebarDirective]
})
export class AppComponent {

    result1 = {};

    selectCallback1(e) {
        this.result1 = e;
    }

}