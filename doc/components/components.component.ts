/**
 * Created by charles on 16/8/3.
 */
import {Component} from "@angular/core";
import {BaseComponent} from "../base.component";
import {SidebarDirective} from "../sidebar/sidebar.directive";
import {PageComponent} from "../page/page.component";
@Component({
    moduleId: module.id,
    selector: 'page-components',
    templateUrl: 'components.component.html',
    styleUrls: ['components.component.css'],
    directives: [PageComponent, SidebarDirective]
})
export class ComponentsComponent extends BaseComponent{

}