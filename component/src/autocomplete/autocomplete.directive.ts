/**
 * Created by charles on 16/5/9.
 */
import {
    Optional,
    Directive,
    Component,
    Input,
    ComponentResolver,
    Output,
    EventEmitter,
    ViewContainerRef,
    ElementRef,
    Provider,
    forwardRef,
    ReflectiveInjector,
    provide,
    Injector
} from "@angular/core";
import {Http, HTTP_PROVIDERS, URLSearchParams, BaseRequestOptions} from "@angular/http";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/common";
import {MockBackend} from "@angular/http/testing";

@Component({
    selector: 'se-autocomplete',
    template: `
        <div class="autocomplete">
        <ul *ngIf="visible">
            <li *ngFor="let item of _list; let i = index" (click)="selectItem(item)">
                <a href="javascript:;">{{optionFn ? optionFn(item) : item[optionKey]}}</a>
            </li>
        </ul></div>`,
    styles: [`
        .autocomplete, .autocomplete * {
            box-sizing: border-box;
        }
        .autocomplete {
            position: relative;
        }
        .autocomplete ul a {
            display: block;
            color: #0088cc;
            text-decoration: none;
            padding: 5px 12px;
        }
        .autocomplete ul a:hover {
            background: #D3EBFD;
        }
        input:focus {
            outline: none;
        }
        ul {
            padding: 0;
            margin: 0;
            list-style: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            border: 1px solid #777;
            background: #FFF;
            max-height: 256px;
            overflow-y: auto;
            overflow-x: hidden;
            z-index: 900;
            min-width: 200px;
            font-size: 12px;
        }
    `
    ]
})
export class AutoCompleteComponent {
    private visible:boolean = false
    private _list:Array<any>
    private selectCallback = new EventEmitter() //点击回调

    optionKey:string

    constructor(injector:Injector, private _el:ElementRef) {
        this.optionKey = injector.get('optionKey')
        this.selectCallback = injector.get('selectCallback')
    }

    show() {
        this.visible = true
    }

    hide(target) {
        if (!this._el.nativeElement.contains(target)) {
            this.visible = false
        }
    }

    update(value) {
        this._list = value
        if (this._list && this._list.length > 0) {
            this.visible = true
        } else {
            this.visible = false
        }
    }

    selectItem(item) {
        this.visible = false
        this.selectCallback.emit(item)
    }
}

const CUSTOM_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => AutoCompleteDirective), multi: true});

@Directive({
    selector: 'input[type=autocomplete]',
    host: {
        '(input)': 'getData($event.target.value, true)',
        '(focus)': 'onFocus($event.target.value)',
        '(blur)': 'onBlur($event)'
    },
    providers: [CUSTOM_VALUE_ACCESSOR, HTTP_PROVIDERS]
})
export class AutoCompleteDirective implements ControlValueAccessor {

    @Input() queryOnFocus:string = "false" //文本框focus时发请求
    @Input() url:string //接口url
    @Input() data:Object[] //本地数据
    @Input() params:any //url所带参数
    @Input() keyword:string = "keyword" //服务端关键字名
    @Input() resultKey:string //返回对象列表对应的key
    @Input() optionKey:string //选项显示内容对应的key
    @Input() optionFn:Function //选项显示内容回调
    @Output() selectCallback = new EventEmitter() //点击回调

    private model:any //ngModel绑定的数据
    private childView:AutoCompleteComponent
    private update:Function = ()=> {
    }

    constructor(private _componentResolver:ComponentResolver,
                private _viewContainerRef:ViewContainerRef,
                private _elementRef:ElementRef,
                private _http:Http,
                @Optional() private backend:MockBackend) {
        if (backend) {
            this._http = new Http(backend, new BaseRequestOptions())
        }
    }

    writeValue(obj:any):void {
        this.model = obj
        if (this.model) {
            this._elementRef.nativeElement.value = this.model[this.optionKey]
        }
    }

    registerOnChange(fn:any):void {
        this.update = fn
    }

    registerOnTouched(fn:any):void {
    }

    ngOnInit() {
        let resolved = ReflectiveInjector.resolveAndCreate([
            provide('optionKey', {useValue: this.optionKey}),
            provide('selectCallback', {useValue: this.selectCallback}),
            provide('optionFn', {useValue: this.optionFn})], this._viewContainerRef.parentInjector)
        this._componentResolver.resolveComponent(AutoCompleteComponent).then(factory => {
            this.childView = this._viewContainerRef.createComponent(factory, 0, resolved).instance
        })
        this.selectCallback.subscribe(item=> {
            this._elementRef.nativeElement.value = item[this.optionKey]
            this.model = Object.assign({}, item)
            this.update(this.model)
        })
    }

    onFocus(value) {
        this.queryOnFocus !== "false" && this.getData(value, false)
    }

    onBlur(e) {
        this.childView.hide(e.relatedTarget)
    }

    getData(keyword, dirty) {
        if (this.url) {
            let params
            if (typeof this.params === 'string') {
                params = new URLSearchParams(this.params)
            } else if (typeof this.params === 'object') {
                params = new URLSearchParams()
                for (let key in this.params) {
                    params.set(key, this.params[key])
                }
            } else {
                params = new URLSearchParams()
            }
            params.set(this.keyword, keyword)
            this._http.get(this.url, {
                search: params
            }).subscribe(res => {
                let result = res.json()
                if (this.resultKey) {
                    result = result[this.resultKey]
                }
                this.childView.update(result)
            })
        } else if (this.data) {
            let list = []
            this.data.forEach(obj=> {
                if (obj[this.optionKey].indexOf(keyword) >= 0) {
                    list.push(obj)
                }
            })
            this.childView.update(list)
        }
        if (dirty && this.model) {
            this.model[this.optionKey] = keyword
            this.update(this.model)
        }
    }
}