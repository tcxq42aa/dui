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
 * Created by charles on 16/8/3.
 */
var core_1 = require("@angular/core");
var SidebarDirective = (function () {
    function SidebarDirective(el) {
        this.el = el;
    }
    SidebarDirective.prototype.getMeta = function () {
        return {
            anchor: this.el.nativeElement.id,
            text: this.el.nativeElement.innerText,
            pId: this.parent
        };
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SidebarDirective.prototype, "parent", void 0);
    SidebarDirective = __decorate([
        core_1.Directive({
            selector: '[doc-sidebar]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SidebarDirective);
    return SidebarDirective;
}());
exports.SidebarDirective = SidebarDirective;
//# sourceMappingURL=sidebar.directive.js.map