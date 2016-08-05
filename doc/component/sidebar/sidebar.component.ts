/**
 * Created by charles on 16/8/3.
 */
import {Component, ChangeDetectorRef, Input, ChangeDetectionStrategy} from "@angular/core";
@Component({
    moduleId: module.id,
    selector: 'doc-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {

    private anchor:string;
    private subAnchor:string;

    @Input() data: Map<string, any>;

    constructor(private cdr: ChangeDetectorRef) {
    }

    clickAnchor(anchor:string) {
        this.anchor = anchor;
        this.subAnchor = '';
    }

    clickSubAnchor(anchor:string, parent:string) {
        this.anchor = parent;
        this.subAnchor = anchor;
    }
}