/**
 * Created by charles on 16/8/4.
 */
import {ViewChildren, ViewChild, QueryList} from "@angular/core";
import {SidebarDirective} from "./sidebar/sidebar.directive";
import {PageComponent} from "./page/page.component";

export class BaseComponent {
    @ViewChildren(SidebarDirective) sidebarsItems:QueryList<SidebarDirective>;
    @ViewChild(PageComponent) pageComponent:PageComponent;

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
        this.pageComponent.setData(data);
    }
}