/**
 * Created by charles on 16/5/4.
 */
import { ViewContainerRef, ComponentResolver } from "@angular/core";
export declare class ClipboardDirective {
    private _componentResolver;
    private viewContainer;
    constructor(_componentResolver: ComponentResolver, viewContainer: ViewContainerRef);
    ngOnInit(): void;
}
