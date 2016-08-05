/**
 * Created by charles on 16/8/3.
 */
import {Component} from "@angular/core";
import {BaseComponent} from "../../component/base.component";
import {SidebarDirective} from "../../component/sidebar/sidebar.directive";
import {DocumentComponent} from "../../component/document/document.component";
@Component({
    moduleId: module.id,
    selector: 'page-components',
    templateUrl: 'components.component.html',
    styleUrls: ['components.component.css'],
    directives: [DocumentComponent, SidebarDirective]
})
export class ComponentsComponent extends BaseComponent{

}