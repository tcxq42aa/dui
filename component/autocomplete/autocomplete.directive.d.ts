/**
 * Created by charles on 16/5/9.
 */
import { ComponentResolver, EventEmitter, ViewContainerRef, ElementRef } from "@angular/core";
import { Http } from "@angular/http";
import { ControlValueAccessor } from "@angular/common";
import { MockBackend } from "@angular/http/testing";
export declare class AutoCompleteDirective implements ControlValueAccessor {
    private _componentResolver;
    private _viewContainerRef;
    private _elementRef;
    private _http;
    private backend;
    queryOnFocus: string;
    url: string;
    data: Object[];
    params: any;
    keyword: string;
    resultKey: string;
    optionKey: string;
    optionFn: Function;
    selectCallback: EventEmitter<{}>;
    private model;
    private childView;
    private update;
    constructor(_componentResolver: ComponentResolver, _viewContainerRef: ViewContainerRef, _elementRef: ElementRef, _http: Http, backend: MockBackend);
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    onFocus(value: any): void;
    onBlur(e: any): void;
    getData(keyword: any, dirty: any): void;
}
