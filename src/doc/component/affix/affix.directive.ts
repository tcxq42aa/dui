/**
 * Created by charles on 16/8/11.
 */
require('./affix.directive.scss');
import {Directive, HostListener, HostBinding, ElementRef} from '@angular/core';
@Directive({
    selector: '[doc-affix]'
})
export class AffixDirective {
    constructor(private elementRef: ElementRef){
    }
    _enable:boolean = false;
    _cacheOffsetTop: number;
    @HostListener('document:scroll', ['$event'])
    onScroll(event){
        if(!this._cacheOffsetTop){
            this._cacheOffsetTop = this.offset(this.elementRef.nativeElement);
        }
        if(event.target.body.scrollTop - this._cacheOffsetTop >= 0) {
            this._enable = true;
        } else {
            this._enable = false;
        }
    }

    @HostBinding('class.affix') get enable() { return this._enable; }

    set enable(v){
        this._enable = v;
    }

    private offset(element){
        if(element.offsetParent) {
            return element.offsetTop + this.offset(element.offsetParent);
        } else {
            return element.offsetTop;
        }
    }
}