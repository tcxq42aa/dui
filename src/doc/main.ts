/**
 * Created by charles on 16/7/22.
 */
import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
declare let PRODUCTION:boolean;
if (PRODUCTION) {
    enableProdMode();
} else {
    if (module['hot']) {
        module['hot'].accept();
    }
}

platformBrowserDynamic().bootstrapModule(AppModule);