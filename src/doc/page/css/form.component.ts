/**
 * Created by charles on 16/8/13.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'doc-form',
    templateUrl: 'form.component.html'
})
export class FormComponent {
    constructor(){
        console.log('init form');
    }
}