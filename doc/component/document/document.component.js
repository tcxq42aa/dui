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
 * Created by charles on 16/8/4.
 */
var core_1 = require("@angular/core");
var sidebar_component_1 = require("../sidebar/sidebar.component");
var DocumentComponent = (function () {
    function DocumentComponent(cdr) {
        this.cdr = cdr;
    }
    DocumentComponent.prototype.setData = function (data) {
        this.data = data;
        this.cdr.detectChanges();
    };
    __decorate([
        core_1.ViewChild(sidebar_component_1.SidebarComponent), 
        __metadata('design:type', sidebar_component_1.SidebarComponent)
    ], DocumentComponent.prototype, "sidebar", void 0);
    DocumentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'doc-page',
            templateUrl: 'document.component.html',
            styleUrls: ['document.component.css'],
            directives: [sidebar_component_1.SidebarComponent]
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
    ], DocumentComponent);
    return DocumentComponent;
}());
exports.DocumentComponent = DocumentComponent;
//# sourceMappingURL=document.component.js.map