/**
 * Created by charles on 16/4/28.
 */
import {
    Directive,
    Input,
    Component,
    ElementRef,
    Injector,
    ComponentResolver,
    ViewContainerRef,
    ReflectiveInjector,
    AfterViewInit,
    ViewChild,
    ChangeDetectorRef,
    Output,
    EventEmitter,
    Renderer
} from "@angular/core";
import {Http, HTTP_PROVIDERS} from "@angular/http";

import "./tips.directive.scss";

@Component({
    moduleId: module.id,
    selector: 'se-tips',
    template: require('./tips.directive.html')
})
class TipsComponent implements AfterViewInit {

    private visible:boolean = true;
    private content:string;
    private direction:string;
    private _offset:Offset = new Offset();
    private _left:any;
    private _top:any;
    private theme:string;

    @Output('show') showEmit;
    @Output('hide') hideEmit;

    @ViewChild('child') childView:ElementRef;

    public show(offset:Offset) {
        this._offset = offset;
        this.reLocation();
        this.visible = true;
        this.showEmit.emit();
    }

    public hide() {
        this.visible = false;
        this.hideEmit.emit();
    }

    constructor(injector:Injector, private _elementRef:ElementRef, private ref:ChangeDetectorRef) {
        this.content = injector.get('content');
        this.theme = injector.get('theme');
        this._offset = injector.get('offset');
        this.direction = Position[Position[injector.get('direction')]] || Position[Position.bottom];
    }

    ngAfterViewInit() {
        this.reLocation();
    }

    reLocation() {
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
    }

    onClick(event){
        console.log('onClick');
    }
}

@Directive({
    selector: '[se-tips]',
    host: {
        '(click)': 'onClick($event)',
        '(focus)': 'onFocus($event)',
        '(blur)': 'onBlur($event)',
        '(mouseenter)': 'onMouseEnter($event)',
        '(mouseleave)': 'onMouseLeave($event)'
    },
    providers: [HTTP_PROVIDERS],
    exportAs: 'seTip'
})
export class TipsDirective {
    @Input() title:any;
    @Input() direction:string;
    @Input() toggle:string = 'focus';
    @Input() remote:string;
    @Input() dismiss:number;
    @Input() theme:string;

    @Output('show') private showEmit = new EventEmitter();
    @Output('hide') private hideEmit = new EventEmitter();

    private visible:boolean = false;
    private timeout:any;
    private child:TipsComponent;

    constructor(private _elementRef:ElementRef,
                private _componentResolver:ComponentResolver,
                private _viewContainer:ViewContainerRef,
                private _renderer:Renderer,
                private http:Http) {
    }

    ngAfterContentInit() {
        if (!this.toggle) {
            return;
        }
        let match = this.toggle.match(/auto(?:\+(\d*))?/i);
        if (match) {
            setTimeout(()=> {
                this.show();
            }, match[1] || 50);
        }
    }

    show() {
        if (this.child) {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            if (this.dismiss) {
                this.timeout = setTimeout(()=> {
                    this.hide();
                }, this.dismiss)
            }
            this.child.show(this.offset(this._elementRef.nativeElement));
            this.visible = true;
        } else {
            this.loadTip();
        }
    }

    hide() {
        this.child && this.child.hide();
        this.visible = false;
    }

    onClick(event) {
        if (this.toggle == 'click') {
            this.visible ? this.hide() : this.show();
        }
    }

    onFocus(event) {
        if (this.toggle == 'focus') {
            this.show();
        }
    }

    onBlur(event) {
        if (this.toggle == 'focus') {
            this.hide();
        }
    }

    onMouseEnter(event) {
        if (this.toggle != 'hover') {
            return;
        }
        this.show();
    }

    onMouseLeave(event) {
        if (this.toggle != 'hover') {
            return;
        }
        this.hide();
    }

    private offset(element:any):Offset {
        return {
            top: element.offsetTop,
            left: element.offsetLeft,
            width: element.offsetWidth,
            height: element.offsetHeight
        }
    }

    private loadTip() {
        this.fetchContent().then((content)=> {
            let resolved = ReflectiveInjector.resolveAndCreate([
                {provide: 'content', useValue: content},
                {provide: 'theme', useValue: this.theme},
                {provide: 'direction', useValue: this.direction},
                {provide: 'offset', useValue: this.offset(this._elementRef.nativeElement)}], this._viewContainer.parentInjector);
            this._componentResolver.resolveComponent(TipsComponent).then(factory => {
                this.child = this._viewContainer.createComponent(factory, 0, resolved).instance;
                this.child.showEmit = this.showEmit;
                this.child.hideEmit = this.hideEmit;
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'title', '');
                this.show();
            })
        });
    }

    private fetchContent() {
        if (this.remote) {
            return new Promise((resolve, reject)=> {
                this.http.get(this.remote).subscribe(res => {
                    resolve(res.text());
                })
            });
        } else {
            return new Promise((resolve, reject)=> {
                resolve(this.title ? (this.title.innerHTML || this.title) : '');
            });
        }
    }
}

class Offset {
    top:number;
    left:number;
    width:number;
    height:number;
}

enum Position {
    left = <any>"left",
    leftTop = <any>"leftTop",
    leftBottom = <any>"leftBottom",
    top = <any>"top",
    topLeft = <any>"topLeft",
    topRight = <any>"topRight",
    right = <any>"right",
    rightTop = <any>"rightTop",
    rightBottom = <any>"rightBottom",
    bottom = <any>"bottom",
    bottomLeft = <any>"bottomLeft",
    bottomRight = <any>"bottomRight"
}