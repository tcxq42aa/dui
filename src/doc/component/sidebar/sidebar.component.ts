/**
 * Created by charles on 16/8/3.
 */
import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {SCROLLSPY_DIRECTIVE} from "../scrollspy/scrollspy.directive";
require("./sidebar.component.scss");
@Component({
    selector: 'doc-sidebar',
    templateUrl: 'sidebar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [SCROLLSPY_DIRECTIVE]
})
export class SidebarComponent {
    @Input() data:Map<string, any>;
}