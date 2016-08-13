/**
 * Created by charles on 16/8/13.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routes";
import {AppComponent} from "./app.component";
import {APP_BASE_HREF} from "@angular/common";
import {DUI_DIRECTIVES} from "../dui/component/directives";
@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, ...DUI_DIRECTIVES],
    bootstrap: [AppComponent],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
    ]
})
export class AppModule {
}