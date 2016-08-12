/**
 * Created by charles on 16/7/22.
 */
import {bootstrap} from "@angular/platform-browser-dynamic";
import {PLATFORM_DIRECTIVES, enableProdMode} from "@angular/core";
import {APP_BASE_HREF} from "@angular/common";
import {AppComponent} from "./app.component";
import {appRouterProviders} from "./app.routes";
import {DUI_DIRECTIVES} from "../dui/component/directives";

declare let PRODUCTION:boolean;
if(PRODUCTION) {
    enableProdMode();
} else {
    if (module['hot']) {
        module['hot'].accept();
    }
}

bootstrap(AppComponent,
    [
        appRouterProviders,
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: PLATFORM_DIRECTIVES, useValue: DUI_DIRECTIVES, multi: true}
    ]);