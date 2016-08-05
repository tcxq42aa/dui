/**
 * Created by charles on 16/8/3.
 */
import {Directive, Input, ElementRef} from "@angular/core";
@Directive({
    selector: '[doc-sidebar]'
})
export class SidebarDirective {

    @Input() parent:string;

    constructor(private el:ElementRef) {
    }

    getMeta() {
        return {
            anchor: this.el.nativeElement.id,
            text: this.el.nativeElement.innerText,
            pId: this.parent
        };
    }
}