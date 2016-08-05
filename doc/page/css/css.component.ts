/**
 * Created by charles on 16/8/3.
 */
import {Component} from "@angular/core";
import {SidebarDirective} from "../../component/sidebar/sidebar.directive";
import {DocumentComponent} from "../../component/document/document.component";
import {BaseComponent} from "../../component/base.component";
@Component({
    moduleId: module.id,
    selector: 'page-css',
    templateUrl: 'css.component.html',
    styleUrls: ['css.component.css'],
    directives: [DocumentComponent, SidebarDirective]
})
export class CssComponent extends BaseComponent {
}