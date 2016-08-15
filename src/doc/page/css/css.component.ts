/**
 * Created by charles on 16/8/3.
 */
import {Component} from "@angular/core";
import {SidebarDirective} from "../../component/sidebar/sidebar.directive";
import {DocumentComponent} from "../../component/document/document.component";
import {BaseComponent} from "../../component/base.component";
require('./css.component.scss');
@Component({
    selector: 'page-css',
    templateUrl: 'css.component.html',
    directives: [DocumentComponent, SidebarDirective]
})
export class CssComponent extends BaseComponent {
}