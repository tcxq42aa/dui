/**
 * Created by charles on 16/4/28.
 */
import { ElementRef, ComponentResolver, ViewContainerRef, Renderer } from "@angular/core";
import { Http } from "@angular/http";
import "./tips.directive.css";
export declare class TipsDirective {
    private _elementRef;
    private _componentResolver;
    private _viewContainer;
    private _renderer;
    private http;
    title: any;
    direction: string;
    toggle: string;
    remote: string;
    dismiss: number;
    private showEmit;
    private hideEmit;
    private visible;
    private timeout;
    private child;
    constructor(_elementRef: ElementRef, _componentResolver: ComponentResolver, _viewContainer: ViewContainerRef, _renderer: Renderer, http: Http);
    ngAfterContentInit(): void;
    show(): void;
    hide(): void;
    onClick(event: any): void;
    onFocus(event: any): void;
    onBlur(event: any): void;
    onMouseEnter(event: any): void;
    onMouseLeave(event: any): void;
    private offset(element);
    private loadTip();
    private fetchContent();
}
