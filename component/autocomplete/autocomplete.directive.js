System.register(["@angular/core", "@angular/http", "@angular/common", "@angular/http/testing"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, http_1, common_1, testing_1;
    var AutoCompleteComponent, CUSTOM_VALUE_ACCESSOR, AutoCompleteDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            }],
        execute: function() {
            AutoCompleteComponent = (function () {
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
            exports_1("AutoCompleteComponent", AutoCompleteComponent);
            CUSTOM_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return AutoCompleteDirective; }), multi: true });
            AutoCompleteDirective = (function () {
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
            exports_1("AutoCompleteDirective", AutoCompleteDirective);
        }
    }
});
//# sourceMappingURL=autocomplete.directive.js.map