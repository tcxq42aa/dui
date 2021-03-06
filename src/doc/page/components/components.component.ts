/**
 * Created by charles on 16/8/3.
 */
import {Component} from "@angular/core";
import {BaseComponent} from "../../component/base.component";
import {SidebarDirective} from "../../component/sidebar/sidebar.directive";
import {DocumentComponent} from "../../component/document/document.component";
require('./components.component.scss');
@Component({
    moduleId: module.id,
    selector: 'page-components',
    template: require('./components.component.html'),
    directives: [DocumentComponent, SidebarDirective]
})
export class ComponentsComponent extends BaseComponent{

}