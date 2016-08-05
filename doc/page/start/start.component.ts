/**
 * Created by charles on 16/8/3.
 */
import {Component} from "@angular/core";
import {DocumentComponent} from "../../component/document/document.component";
import {SidebarDirective} from "../../component/sidebar/sidebar.directive";
import {BaseComponent} from "../../component/base.component";
@Component({
    moduleId: module.id,
    selector: 'page-start',
    templateUrl: 'start.component.html',
    styleUrls: ['start.component.css'],
    directives: [DocumentComponent, SidebarDirective]
})
export class StartComponent extends BaseComponent {
}