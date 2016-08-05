/**
 * Created by charles on 16/4/26.
 */
import {ElementRef, Directive} from "@angular/core";

import "highlightjs/styles/github.css";

let hljs = require('highlightjs/highlight.pack.js');
@Directive({
    selector: '[doc-highlight]'
})
export class HighlightDirective {
    ngOnInit():any {
        hljs.highlightBlock(this.e.nativeElement);
    }

    constructor(private e:ElementRef) {
    }
}