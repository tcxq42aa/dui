(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/platform-browser-dynamic"), require("@angular/core"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/platform-browser-dynamic", "@angular/core"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/platform-browser-dynamic"), require("@angular/core")) : factory(root["@angular/platform-browser-dynamic"], root["@angular/core"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/app";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by charles on 16/7/22.
	 */
	var platform_browser_dynamic_1 = __webpack_require__(2);
	var app_component_1 = __webpack_require__(3);
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(4);
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


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=app.bundle.js.map