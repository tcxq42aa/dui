/**
 * Created by charles on 16/5/4.
 */
import {Directive, ElementRef, Component, ViewContainerRef, ComponentResolver} from "@angular/core";
import {TipsDirective} from "../tips/tips.directive";

let Clipboard = require("clipboard");
@Directive({
    selector: '[se-copy]',
})
export class ClipboardDirective {

    constructor(private _componentResolver:ComponentResolver, private viewContainer:ViewContainerRef) {
    }

    ngOnInit() {
        this._componentResolver.resolveComponent(ClipboardButtonComponent).then(factory => {
            this.viewContainer.createComponent(factory, 0)
        })
    }
}

@Component({
    selector: 'se-copy-btn',
    template: `<button class="copy" se-tips title="Copied!" toggle="click" direction="top" dismiss="2000">Copy</button>`,
    directives: [TipsDirective],
    styles: [`
        button.copy {
          position: absolute;
          background: white;
          border-width: 0;
          color: #999;
          right: 0;
          top: 0;
        }
    `]
})
class ClipboardButtonComponent {

    constructor(private _elementRef:ElementRef) {
    }

    ngAfterViewInit() {
        new Clipboard(this._elementRef.nativeElement, {
            text: function (trigger) {
                return trigger.previousElementSibling.innerText.trim();
            }
        })
    }
}