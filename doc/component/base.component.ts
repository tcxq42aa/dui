/**
 * Created by charles on 16/8/4.
 */
import {ViewChildren, ViewChild, QueryList} from "@angular/core";
import {SidebarDirective} from "./sidebar/sidebar.directive";
import {DocumentComponent} from "./document/document.component";

export class BaseComponent {
    @ViewChildren(SidebarDirective) sidebarsItems:QueryList<SidebarDirective>;
    @ViewChild(DocumentComponent) documentComponent:DocumentComponent;

    ngAfterViewInit() {
        let data = new Map<string, any>();
        this.sidebarsItems.forEach((s)=> {
            let meta = s.getMeta();

            if (meta.pId) {
                if (data.get(meta.pId)) {
                    data.get(meta.pId)['children'] = data.get(meta.pId)['children'] || [];
                    data.get(meta.pId)['children'].push(meta);
                }
            } else {
                data.set(meta.anchor, meta);
            }
        });
        this.documentComponent.setData(data);
    }
}