"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by charles on 16/5/4.
 */
var core_1 = require("@angular/core");
var tips_directive_1 = require("../tips/tips.directive");
var ClipboardDirective = (function () {
    function ClipboardDirective(_componentResolver, viewContainer) {
        this._componentResolver = _componentResolver;
        this.viewContainer = viewContainer;
    }
    ClipboardDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._componentResolver.resolveComponent(ClipboardButtonComponent).then(function (factory) {
            _this.viewContainer.createComponent(factory, 0);
        });
    };
    ClipboardDirective = __decorate([
        core_1.Directive({
            selector: '[se-copy]',
        }), 
        __metadata('design:paramtypes', [core_1.ComponentResolver, core_1.ViewContainerRef])
    ], ClipboardDirective);
    return ClipboardDirective;
}());
exports.ClipboardDirective = ClipboardDirective;
var ClipboardButtonComponent = (function () {
    function ClipboardButtonComponent(_elementRef) {
        this._elementRef = _elementRef;
    }
    ClipboardButtonComponent.prototype.ngAfterViewInit = function () {
        new Clipboard(this._elementRef.nativeElement, {
            text: function (trigger) {
                return trigger.previousElementSibling.innerText.trim();
            }
        });
    };
    ClipboardButtonComponent = __decorate([
        core_1.Component({
            selector: 'se-copy-btn',
            template: "<button class=\"copy\" se-tips title=\"Copied!\" toggle=\"click\" direction=\"top\" dismiss=\"2000\">Copy</button>",
            directives: [tips_directive_1.TipsDirective],
            styles: ["\n        button.copy {\n          position: absolute;\n          background: white;\n          border-width: 0;\n          color: #999;\n          right: 0;\n          top: 0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ClipboardButtonComponent);
    return ClipboardButtonComponent;
}());
//# sourceMappingURL=clipboard.directive.js.map