/**
 * Created by charles on 16/8/3.
 */
import {Component} from "@angular/core";
import {DocumentComponent} from "../../component/document/document.component";
import {SidebarDirective} from "../../component/sidebar/sidebar.directive";
import {BaseComponent} from "../../component/base.component";
require("./start.component.scss");
@Component({
    moduleId: module.id,
    selector: 'page-start',
    template: require('./start.component.html'),
    directives: [DocumentComponent, SidebarDirective]
})
export class StartComponent extends BaseComponent {
}