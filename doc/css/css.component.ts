/**
 * Created by charles on 16/8/3.
 */
import {Component} from "@angular/core";
import {PageComponent} from "../page/page.component";
import {SidebarDirective} from "../sidebar/sidebar.directive";
import {BaseComponent} from "../base.component";
@Component({
    moduleId: module.id,
    selector: 'page-css',
    templateUrl: 'css.component.html',
    styleUrls: ['css.component.css'],
    directives: [PageComponent, SidebarDirective]
})
export class CssComponent extends BaseComponent {
}