/**
 * Created by charles on 16/7/22.
 */
import {Component} from "@angular/core";
import {TipsDirective} from "dui2/core";
import {AutoCompleteDirective} from "dui2/core";
@Component({
    selector: 'my-app',
    template: `<h3>Hello2</h3><button se-tips toggle="hover" title="hello">cccccc</button>
<input type="autocomplete"
               style="width:300px"
               class="txtNew"
               url="http://api.route.dooioo.com/loupan/search/v1/resblock/autoSearch"
               optionKey="name"
               placeholder="请输入关键字"
               params="gbCode=310000&aaa=123"
               (selectCallback)="selectCallback1($event)"/>
               <code>观察选中值的变化: {{result1 | json}}</code>
`,
    directives: [TipsDirective, AutoCompleteDirective]
})
export class AppComponent {

    result1 = {};

    selectCallback1(e){
        this.result1 = e;
    }

}