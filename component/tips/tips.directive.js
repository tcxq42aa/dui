System.register(["@angular/core", "@angular/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var TipsComponent, TipsDirective, Offset, Position;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            TipsComponent = (function () {
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
                        template: require('./tips.directive.html'),
                        styles: [require('./tips.directive.css')]
                    }), 
                    __metadata('design:paramtypes', [core_1.Injector, core_1.ElementRef, core_1.ChangeDetectorRef])
                ], TipsComponent);
                return TipsComponent;
            }());
            TipsDirective = (function () {
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
            exports_1("TipsDirective", TipsDirective);
            Offset = (function () {
                function Offset() {
                }
                return Offset;
            }());
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
        }
    }
});
//# sourceMappingURL=tips.directive.js.map