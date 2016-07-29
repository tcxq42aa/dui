(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/http"), require("@angular/common"), require("@angular/http/testing"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/http", "@angular/common", "@angular/http/testing"], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory(require("@angular/core"), require("@angular/http"), require("@angular/common"), require("@angular/http/testing"));
	else
		root["core"] = factory(root["@angular/core"], root["@angular/http"], root["@angular/common"], root["@angular/http/testing"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
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
/******/ 	__webpack_require__.p = "";
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
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * Created by charles on 16/7/22.
	 */
	__export(__webpack_require__(2));
	__export(__webpack_require__(7));


/***/ },
/* 2 */
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
	 * Created by charles on 16/4/28.
	 */
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(4);
	var TipsComponent = (function () {
	    function TipsComponent(injector, _elementRef, ref) {
	        this._elementRef = _elementRef;
	        this.ref = ref;
	        this.visible = true;
	        this._offset = new Offset();
	        this.content = injector.get('content');
	        this._offset = injector.get('offset');
	        this.direction = Position[Position[injector.get('direction')]] || Position[Position.bottom];
	    }
	    TipsComponent.prototype.show = function (offset) {
	        this._offset = offset;
	        this.reLocation();
	        this.visible = true;
	        this.showEmit.emit();
	    };
	    TipsComponent.prototype.hide = function () {
	        this.visible = false;
	        this.hideEmit.emit();
	    };
	    TipsComponent.prototype.ngAfterViewInit = function () {
	        this.reLocation();
	    };
	    TipsComponent.prototype.reLocation = function () {
	        if (!this.childView) {
	            return;
	        }
	        switch (this.direction) {
	            // left
	            case Position[Position.left]:
	                this._left = this._offset.left - this.childView.nativeElement.offsetWidth - 10;
	                this._top = this._offset.top + this._offset.height / 2 - this.childView.nativeElement.offsetHeight / 2;
	                break;
	            case Position[Position.leftBottom]:
	                this._left = this._offset.left - this.childView.nativeElement.offsetWidth - 10;
	                this._top = this._offset.top + this._offset.height - this.childView.nativeElement.offsetHeight;
	                break;
	            case Position[Position.leftTop]:
	                this._left = this._offset.left - this.childView.nativeElement.offsetWidth - 10;
	                this._top = this._offset.top;
	                break;
	            //top
	            case Position[Position.top]:
	                this._left = this._offset.left + this._offset.width / 2 - this.childView.nativeElement.offsetWidth / 2;
	                this._top = this._offset.top - this.childView.nativeElement.offsetHeight - 10;
	                break;
	            case Position[Position.topLeft]:
	                this._left = this._offset.left;
	                this._top = this._offset.top - this.childView.nativeElement.offsetHeight - 10;
	                break;
	            case Position[Position.topRight]:
	                this._left = this._offset.left + this._offset.width - this.childView.nativeElement.offsetWidth;
	                this._top = this._offset.top - this.childView.nativeElement.offsetHeight - 10;
	                break;
	            //right
	            case Position[Position.right]:
	                this._left = this._offset.left + this._offset.width + 10;
	                this._top = this._offset.top + this._offset.height / 2 - this.childView.nativeElement.offsetHeight / 2;
	                break;
	            case Position[Position.rightBottom]:
	                this._left = this._offset.left + this._offset.width + 10;
	                this._top = this._offset.top + this._offset.height - this.childView.nativeElement.offsetHeight;
	                break;
	            case Position[Position.rightTop]:
	                this._left = this._offset.left + this._offset.width + 10;
	                this._top = this._offset.top;
	                break;
	            //bottom
	            case Position[Position.bottom]:
	                this._left = this._offset.left + this._offset.width / 2 - this.childView.nativeElement.offsetWidth / 2;
	                this._top = this._offset.top + this._offset.height + 10;
	                break;
	            case Position[Position.bottomLeft]:
	                this._left = this._offset.left;
	                this._top = this._offset.top + this._offset.height + 10;
	                break;
	            case Position[Position.bottomRight]:
	                this._left = this._offset.left + this._offset.width - this.childView.nativeElement.offsetWidth;
	                this._top = this._offset.top + this._offset.height + 10;
	                break;
	        }
	        this.ref.detectChanges();
	    };
	    __decorate([
	        core_1.Output('show'), 
	        __metadata('design:type', Object)
	    ], TipsComponent.prototype, "showEmit", void 0);
	    __decorate([
	        core_1.Output('hide'), 
	        __metadata('design:type', Object)
	    ], TipsComponent.prototype, "hideEmit", void 0);
	    __decorate([
	        core_1.ViewChild('child'), 
	        __metadata('design:type', core_1.ElementRef)
	    ], TipsComponent.prototype, "childView", void 0);
	    TipsComponent = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'se-tips',
	            template: __webpack_require__(5),
	            styles: [__webpack_require__(6)]
	        }), 
	        __metadata('design:paramtypes', [core_1.Injector, core_1.ElementRef, core_1.ChangeDetectorRef])
	    ], TipsComponent);
	    return TipsComponent;
	}());
	var TipsDirective = (function () {
	    function TipsDirective(_elementRef, _componentResolver, _viewContainer, _renderer, http) {
	        this._elementRef = _elementRef;
	        this._componentResolver = _componentResolver;
	        this._viewContainer = _viewContainer;
	        this._renderer = _renderer;
	        this.http = http;
	        this.toggle = 'focus';
	        this.showEmit = new core_1.EventEmitter();
	        this.hideEmit = new core_1.EventEmitter();
	        this.visible = false;
	    }
	    TipsDirective.prototype.ngAfterContentInit = function () {
	        var _this = this;
	        if (!this.toggle) {
	            return;
	        }
	        var match = this.toggle.match(/auto(?:\+(\d*))?/i);
	        if (match) {
	            setTimeout(function () {
	                _this.show();
	            }, match[1] || 50);
	        }
	    };
	    TipsDirective.prototype.show = function () {
	        var _this = this;
	        if (this.child) {
	            if (this.timeout) {
	                clearTimeout(this.timeout);
	            }
	            if (this.dismiss) {
	                this.timeout = setTimeout(function () {
	                    _this.hide();
	                }, this.dismiss);
	            }
	            this.child.show(this.offset(this._elementRef.nativeElement));
	            this.visible = true;
	        }
	        else {
	            this.loadTip();
	        }
	    };
	    TipsDirective.prototype.hide = function () {
	        this.child && this.child.hide();
	        this.visible = false;
	    };
	    TipsDirective.prototype.onClick = function (event) {
	        if (this.toggle == 'click') {
	            this.visible ? this.hide() : this.show();
	        }
	    };
	    TipsDirective.prototype.onFocus = function (event) {
	        if (this.toggle == 'focus') {
	            this.show();
	        }
	    };
	    TipsDirective.prototype.onBlur = function (event) {
	        if (this.toggle == 'focus') {
	            this.hide();
	        }
	    };
	    TipsDirective.prototype.onMouseEnter = function (event) {
	        if (this.toggle != 'hover') {
	            return;
	        }
	        this.show();
	    };
	    TipsDirective.prototype.onMouseLeave = function (event) {
	        if (this.toggle != 'hover') {
	            return;
	        }
	        this.hide();
	    };
	    TipsDirective.prototype.offset = function (element) {
	        return {
	            top: element.offsetTop,
	            left: element.offsetLeft,
	            width: element.offsetWidth,
	            height: element.offsetHeight
	        };
	    };
	    TipsDirective.prototype.loadTip = function () {
	        var _this = this;
	        this.fetchContent().then(function (content) {
	            var resolved = core_1.ReflectiveInjector.resolveAndCreate([
	                core_1.provide('content', { useValue: content }),
	                core_1.provide('direction', { useValue: _this.direction }),
	                core_1.provide('offset', { useValue: _this.offset(_this._elementRef.nativeElement) })], _this._viewContainer.parentInjector);
	            _this._componentResolver.resolveComponent(TipsComponent).then(function (factory) {
	                _this.child = _this._viewContainer.createComponent(factory, 0, resolved).instance;
	                _this.child.showEmit = _this.showEmit;
	                _this.child.hideEmit = _this.hideEmit;
	                _this._renderer.setElementProperty(_this._elementRef.nativeElement, 'title', '');
	                _this.show();
	            });
	        });
	    };
	    TipsDirective.prototype.fetchContent = function () {
	        var _this = this;
	        if (this.remote) {
	            return new Promise(function (resolve, reject) {
	                _this.http.get(_this.remote).subscribe(function (res) {
	                    resolve(res.text());
	                });
	            });
	        }
	        else {
	            return new Promise(function (resolve, reject) {
	                resolve(_this.title ? (_this.title.innerHTML || _this.title) : '');
	            });
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], TipsDirective.prototype, "title", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TipsDirective.prototype, "direction", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TipsDirective.prototype, "toggle", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TipsDirective.prototype, "remote", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], TipsDirective.prototype, "dismiss", void 0);
	    __decorate([
	        core_1.Output('show'), 
	        __metadata('design:type', Object)
	    ], TipsDirective.prototype, "showEmit", void 0);
	    __decorate([
	        core_1.Output('hide'), 
	        __metadata('design:type', Object)
	    ], TipsDirective.prototype, "hideEmit", void 0);
	    TipsDirective = __decorate([
	        core_1.Directive({
	            selector: '[se-tips]',
	            host: {
	                '(click)': 'onClick($event)',
	                '(focus)': 'onFocus($event)',
	                '(blur)': 'onBlur($event)',
	                '(mouseenter)': 'onMouseEnter($event)',
	                '(mouseleave)': 'onMouseLeave($event)',
	            },
	            providers: [http_1.HTTP_PROVIDERS],
	            exportAs: 'seTip'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentResolver, core_1.ViewContainerRef, core_1.Renderer, http_1.Http])
	    ], TipsDirective);
	    return TipsDirective;
	}());
	exports.TipsDirective = TipsDirective;
	var Offset = (function () {
	    function Offset() {
	    }
	    return Offset;
	}());
	var Position;
	(function (Position) {
	    Position[Position["left"] = "left"] = "left";
	    Position[Position["leftTop"] = "leftTop"] = "leftTop";
	    Position[Position["leftBottom"] = "leftBottom"] = "leftBottom";
	    Position[Position["top"] = "top"] = "top";
	    Position[Position["topLeft"] = "topLeft"] = "topLeft";
	    Position[Position["topRight"] = "topRight"] = "topRight";
	    Position[Position["right"] = "right"] = "right";
	    Position[Position["rightTop"] = "rightTop"] = "rightTop";
	    Position[Position["rightBottom"] = "rightBottom"] = "rightBottom";
	    Position[Position["bottom"] = "bottom"] = "bottom";
	    Position[Position["bottomLeft"] = "bottomLeft"] = "bottomLeft";
	    Position[Position["bottomRight"] = "bottomRight"] = "bottomRight";
	})(Position || (Position = {}));


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div #child class=\"tips\"\n     *ngIf=\"visible\"\n     [ngClass]=\"direction\"\n     [ngStyle]=\"{'left': _left + 'px', 'top': _top + 'px'}\" [innerHTML]=\"content\">\n</div>"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = ".tips {\n    z-index: 999;\n    position: absolute;\n    color: #fff;\n    background: rgba(0,0,0,0.75);\n    border-radius: 4px;\n    padding: 6px 8px;\n    white-space: nowrap;\n}\n\n.tips:after {\n    z-index: 999;\n    display: block;\n    content: ' ';\n    position: absolute;\n}\n.tips.left:after {\n    border-bottom: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid transparent;\n    border-left: 5px solid rgba(0,0,0,.75);\n    top: 50%;\n    right: -10px;\n    margin-top: -5px;\n}\n.tips.right:after {\n    border-left: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-top: 5px solid transparent;\n    border-right: 5px solid rgba(0,0,0,.75);\n    top: 50%;\n    left: -10px;\n    margin-top: -5px;\n}\n.tips.bottom:after {\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid rgba(0,0,0,.75);\n    left: 50%;\n    top: -10px;\n    margin-left: -5px;\n}\n.tips.top:after {\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-top: 5px solid rgba(0,0,0,.75);\n    left: 50%;\n    bottom: -10px;\n    margin-left: -5px;\n}\n.tips.leftTop:after,\n.tips.leftBottom:after{\n    border-top: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-left: 5px solid rgba(0,0,0,.75);\n    top: 50%;\n    right: -10px;\n    margin-top: -5px;\n}\n.tips.rightTop:after,\n.tips.rightBottom:after{\n    border-top: 5px solid transparent;\n    border-left: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-right: 5px solid rgba(0,0,0,.75);\n    top: 50%;\n    left: -10px;\n    margin-top: -5px;\n}\n.tips[class*=\"leftBottom\"]:after,\n.tips[class*=\"rightBottom\"]:after{\n    top: auto;\n    bottom: 10px;\n    margin-top: 0;\n}\n.tips[class*=\"leftTop\"]:after,\n.tips[class*=\"rightTop\"]:after{\n    top: 10px;\n    margin-top: 0;\n}\n\n.tips.topLeft:after,\n.tips.topRight:after{\n    border-right: 5px solid transparent;\n    border-left: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-top: 5px solid rgba(0,0,0,.75);\n}\n.tips[class*=\"topLeft\"]:after {\n    top: auto;\n    bottom: -10px;\n    left: 10px;\n}\n.tips[class*=\"topRight\"]:after{\n    top: auto;\n    left: auto;\n    bottom: -10px;\n    right: 10px;\n}\n.tips.bottomLeft:after,\n.tips.bottomRight:after{\n    border-right: 5px solid transparent;\n    border-left: 5px solid transparent;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid rgba(0,0,0,.75);\n}\n.tips[class*=\"bottomLeft\"]:after {\n    left: 10px;\n    top: -10px;\n}\n.tips[class*=\"bottomRight\"]:after{\n    top: -10px;\n    left: auto;\n    right: 10px;\n}"

/***/ },
/* 7 */
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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	/**
	 * Created by charles on 16/5/9.
	 */
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(4);
	var common_1 = __webpack_require__(8);
	var testing_1 = __webpack_require__(9);
	var AutoCompleteComponent = (function () {
	    function AutoCompleteComponent(injector, _el) {
	        this._el = _el;
	        this.visible = false;
	        this.selectCallback = new core_1.EventEmitter(); //点击回调
	        this.optionKey = injector.get('optionKey');
	        this.selectCallback = injector.get('selectCallback');
	    }
	    AutoCompleteComponent.prototype.show = function () {
	        this.visible = true;
	    };
	    AutoCompleteComponent.prototype.hide = function (target) {
	        if (!this._el.nativeElement.contains(target)) {
	            this.visible = false;
	        }
	    };
	    AutoCompleteComponent.prototype.update = function (value) {
	        this._list = value;
	        if (this._list && this._list.length > 0) {
	            this.visible = true;
	        }
	        else {
	            this.visible = false;
	        }
	    };
	    AutoCompleteComponent.prototype.selectItem = function (item) {
	        this.visible = false;
	        this.selectCallback.emit(item);
	    };
	    AutoCompleteComponent = __decorate([
	        core_1.Component({
	            selector: 'se-autocomplete',
	            template: "\n        <div class=\"autocomplete\">\n        <ul *ngIf=\"visible\">\n            <li *ngFor=\"let item of _list; let i = index\" (click)=\"selectItem(item)\">\n                <a href=\"javascript:;\">{{optionFn ? optionFn(item) : item[optionKey]}}</a>\n            </li>\n        </ul></div>",
	            styles: ["\n        .autocomplete, .autocomplete * {\n            box-sizing: border-box;\n        }\n        .autocomplete {\n            position: relative;\n        }\n        .autocomplete ul a {\n            display: block;\n            color: #0088cc;\n            text-decoration: none;\n            padding: 5px 12px;\n        }\n        .autocomplete ul a:hover {\n            background: #D3EBFD;\n        }\n        input:focus {\n            outline: none;\n        }\n        ul {\n            padding: 0;\n            margin: 0;\n            list-style: none;\n            position: absolute;\n            top: 100%;\n            left: 0;\n            right: 0;\n            border: 1px solid #777;\n            background: #FFF;\n            max-height: 256px;\n            overflow-y: auto;\n            overflow-x: hidden;\n            z-index: 900;\n            min-width: 200px;\n            font-size: 12px;\n        }\n    "
	            ]
	        }), 
	        __metadata('design:paramtypes', [core_1.Injector, core_1.ElementRef])
	    ], AutoCompleteComponent);
	    return AutoCompleteComponent;
	}());
	exports.AutoCompleteComponent = AutoCompleteComponent;
	var CUSTOM_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return AutoCompleteDirective; }), multi: true });
	var AutoCompleteDirective = (function () {
	    function AutoCompleteDirective(_componentResolver, _viewContainerRef, _elementRef, _http, backend) {
	        this._componentResolver = _componentResolver;
	        this._viewContainerRef = _viewContainerRef;
	        this._elementRef = _elementRef;
	        this._http = _http;
	        this.backend = backend;
	        this.queryOnFocus = "false"; //文本框focus时发请求
	        this.keyword = "keyword"; //服务端关键字名
	        this.selectCallback = new core_1.EventEmitter(); //点击回调
	        this.update = function () {
	        };
	        if (backend) {
	            this._http = new http_1.Http(backend, new http_1.BaseRequestOptions());
	        }
	    }
	    AutoCompleteDirective.prototype.writeValue = function (obj) {
	        this.model = obj;
	        if (this.model) {
	            this._elementRef.nativeElement.value = this.model[this.optionKey];
	        }
	    };
	    AutoCompleteDirective.prototype.registerOnChange = function (fn) {
	        this.update = fn;
	    };
	    AutoCompleteDirective.prototype.registerOnTouched = function (fn) {
	    };
	    AutoCompleteDirective.prototype.ngOnInit = function () {
	        var _this = this;
	        var resolved = core_1.ReflectiveInjector.resolveAndCreate([
	            core_1.provide('optionKey', { useValue: this.optionKey }),
	            core_1.provide('selectCallback', { useValue: this.selectCallback }),
	            core_1.provide('optionFn', { useValue: this.optionFn })], this._viewContainerRef.parentInjector);
	        this._componentResolver.resolveComponent(AutoCompleteComponent).then(function (factory) {
	            _this.childView = _this._viewContainerRef.createComponent(factory, 0, resolved).instance;
	        });
	        this.selectCallback.subscribe(function (item) {
	            _this._elementRef.nativeElement.value = item[_this.optionKey];
	            _this.model = Object.assign({}, item);
	            _this.update(_this.model);
	        });
	    };
	    AutoCompleteDirective.prototype.onFocus = function (value) {
	        this.queryOnFocus !== "false" && this.getData(value, false);
	    };
	    AutoCompleteDirective.prototype.onBlur = function (e) {
	        this.childView.hide(e.relatedTarget);
	    };
	    AutoCompleteDirective.prototype.getData = function (keyword, dirty) {
	        var _this = this;
	        if (this.url) {
	            var params = void 0;
	            if (typeof this.params === 'string') {
	                params = new http_1.URLSearchParams(this.params);
	            }
	            else if (typeof this.params === 'object') {
	                params = new http_1.URLSearchParams();
	                for (var key in this.params) {
	                    params.set(key, this.params[key]);
	                }
	            }
	            else {
	                params = new http_1.URLSearchParams();
	            }
	            params.set(this.keyword, keyword);
	            this._http.get(this.url, {
	                search: params
	            }).subscribe(function (res) {
	                var result = res.json();
	                if (_this.resultKey) {
	                    result = result[_this.resultKey];
	                }
	                _this.childView.update(result);
	            });
	        }
	        else if (this.data) {
	            var list_1 = [];
	            this.data.forEach(function (obj) {
	                if (obj[_this.optionKey].indexOf(keyword) >= 0) {
	                    list_1.push(obj);
	                }
	            });
	            this.childView.update(list_1);
	        }
	        if (dirty && this.model) {
	            this.model[this.optionKey] = keyword;
	            this.update(this.model);
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], AutoCompleteDirective.prototype, "queryOnFocus", void 0);
	    __decorate([
	        //文本框focus时发请求
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], AutoCompleteDirective.prototype, "url", void 0);
	    __decorate([
	        //接口url
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], AutoCompleteDirective.prototype, "data", void 0);
	    __decorate([
	        //本地数据
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], AutoCompleteDirective.prototype, "params", void 0);
	    __decorate([
	        //url所带参数
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], AutoCompleteDirective.prototype, "keyword", void 0);
	    __decorate([
	        //服务端关键字名
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], AutoCompleteDirective.prototype, "resultKey", void 0);
	    __decorate([
	        //返回对象列表对应的key
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], AutoCompleteDirective.prototype, "optionKey", void 0);
	    __decorate([
	        //选项显示内容对应的key
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], AutoCompleteDirective.prototype, "optionFn", void 0);
	    __decorate([
	        //选项显示内容回调
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], AutoCompleteDirective.prototype, "selectCallback", void 0);
	    AutoCompleteDirective = __decorate([
	        core_1.Directive({
	            selector: 'input[type=autocomplete]',
	            host: {
	                '(input)': 'getData($event.target.value, true)',
	                '(focus)': 'onFocus($event.target.value)',
	                '(blur)': 'onBlur($event)'
	            },
	            providers: [CUSTOM_VALUE_ACCESSOR, http_1.HTTP_PROVIDERS]
	        }),
	        __param(4, core_1.Optional()), 
	        __metadata('design:paramtypes', [core_1.ComponentResolver, core_1.ViewContainerRef, core_1.ElementRef, http_1.Http, testing_1.MockBackend])
	    ], AutoCompleteDirective);
	    return AutoCompleteDirective;
	}());
	exports.AutoCompleteDirective = AutoCompleteDirective;


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=core.js.map