/**
 * Created by charles on 16/8/4.
 */
import {Component, ChangeDetectorRef, ViewChild} from "@angular/core";
import {SidebarComponent} from "../sidebar/sidebar.component";
require('./document.component.scss');
@Component({
    moduleId: module.id,
    selector: 'doc-page',
    template: require('./document.component.html'),
    directives: [SidebarComponent]
})
export class DocumentComponent {
    @ViewChild(SidebarComponent) sidebar:SidebarComponent;
    data:Map<string, any>;

    constructor(private cdr:ChangeDetectorRef) {
    }

    setData(data:any) {
        this.data = data;
        this.cdr.detectChanges();
    }
}