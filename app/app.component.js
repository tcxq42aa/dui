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
 * Created by charles on 16/7/22.
 */
var core_1 = require("@angular/core");
// import {TipsDirective} from "ngdui/core";
// import {AutoCompleteDirective} from "ngdui/core";
var AppComponent = (function () {
    function AppComponent() {
        this.result1 = {};
    }
    AppComponent.prototype.selectCallback1 = function (e) {
        this.result1 = e;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h3>Hello2</h3><button se-tips toggle=\"hover\" title=\"hello\">dddd</button>\n<input type=\"autocomplete\"\n               style=\"width:300px\"\n               class=\"txtNew\"\n               url=\"http://api.route.dooioo.com/loupan/search/v1/resblock/autoSearch\"\n               optionKey=\"name\"\n               placeholder=\"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\"\n               params=\"gbCode=310000&aaa=123\"\n               (selectCallback)=\"selectCallback1($event)\"/>\n               <code>\u89C2\u5BDF\u9009\u4E2D\u503C\u7684\u53D8\u5316: {{result1 | json}}</code>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map