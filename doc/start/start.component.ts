/**
 * Created by charles on 16/8/3.
 */
import {Component} from "@angular/core";
import {SidebarDirective} from "../sidebar/sidebar.directive";
import {BaseComponent} from "../base.component";
import {PageComponent} from "../page/page.component";
@Component({
    moduleId: module.id,
    selector: 'page-start',
    templateUrl: 'start.component.html',
    styleUrls: ['start.component.css'],
    directives: [PageComponent, SidebarDirective]
})
export class StartComponent extends BaseComponent {
}