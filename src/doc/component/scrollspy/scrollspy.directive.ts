/**
 * Created by charles on 16/8/11.
 */
import {Directive, Input, ContentChildren, QueryList, HostBinding, HostListener, ElementRef} from "@angular/core";
@Directive({
    selector: '[doc-scrollspy-active]'
})
class ScrollSpyActiveDirective {
    @Input('doc-scrollspy-active') activeClass;

    public target:HTMLElement;
    public range: number[];
    public _active:boolean;

    @HostBinding('class.active') get active() { return this._active; }

    set active(v){
        this._active = v;
    }

    constructor(public elementRef:ElementRef) {
    }
}

@Directive({
    selector: '[doc-scrollspy]'
})
class ScrollSpyDirective {

    private ranges: number[] = [];

    @ContentChildren(ScrollSpyActiveDirective) contentChildren:QueryList<ScrollSpyActiveDirective>;

    @HostListener('document:scroll', ['$event'])
    onScroll(event) {
        this.contentChildren.forEach((child, index)=> {
            if(event.target.body.scrollTop - this.ranges[index] >= -5 && event.target.body.scrollTop - this.ranges[index+1] < -5) {
                child.active = true;
            } else {
                child.active = false;
            }
        });
    }

    ngAfterContentInit() {
        this.contentChildren.forEach((child, index)=> {
            child.target = document.getElementById(child.elementRef.nativeElement.hash.replace('#', ''));
            this.ranges[index] = this.offset(child.target);
        });
        this.ranges.push(Infinity);
    }

    private offset(element) {
        if (element.offsetParent) {
            return element.offsetTop + this.offset(element.offsetParent);
        } else {
            return element.offsetTop;
        }
    }
}


export const SCROLLSPY_DIRECTIVE = [ScrollSpyDirective, ScrollSpyActiveDirective];
