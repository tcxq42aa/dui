"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var page_component_1 = require("../page/page.component");
var sidebar_directive_1 = require("../sidebar/sidebar.directive");
var base_component_1 = require("../base.component");
var CssComponent = (function (_super) {
    __extends(CssComponent, _super);
    function CssComponent() {
        _super.apply(this, arguments);
    }
    CssComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page-css',
            templateUrl: 'css.component.html',
            styleUrls: ['css.component.css'],
            directives: [page_component_1.PageComponent, sidebar_directive_1.SidebarDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], CssComponent);
    return CssComponent;
}(base_component_1.BaseComponent));
exports.CssComponent = CssComponent;
//# sourceMappingURL=css.component.js.map