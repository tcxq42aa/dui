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
var sidebar_directive_1 = require("./sidebar/sidebar.directive");
var document_component_1 = require("./document/document.component");
var BaseComponent = (function () {
    function BaseComponent() {
    }
    BaseComponent.prototype.ngAfterViewInit = function () {
        var data = new Map();
        this.sidebarsItems.forEach(function (s) {
            var meta = s.getMeta();
            if (meta.pId) {
                if (data.get(meta.pId)) {
                    data.get(meta.pId)['children'] = data.get(meta.pId)['children'] || [];
                    data.get(meta.pId)['children'].push(meta);
                }
            }
            else {
                data.set(meta.anchor, meta);
            }
        });
        this.documentComponent.setData(data);
    };
    __decorate([
        core_1.ViewChildren(sidebar_directive_1.SidebarDirective), 
        __metadata('design:type', core_1.QueryList)
    ], BaseComponent.prototype, "sidebarsItems", void 0);
    __decorate([
        core_1.ViewChild(document_component_1.DocumentComponent), 
        __metadata('design:type', document_component_1.DocumentComponent)
    ], BaseComponent.prototype, "documentComponent", void 0);
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map