/**
 * Created by charles on 16/8/3.
 */
import { provideRouter, RouterConfig }  from '@angular/router';
import {StartComponent} from "./page/start/start.component";
import {CssComponent} from "./page/css/css.component";
import {ComponentsComponent} from "./page/components/components.component";

const routes: RouterConfig = [
    {
        path: 'start',
        component: StartComponent
    },
    {
        path: 'css',
        component: CssComponent
    },
    {
        path: 'components',
        component: ComponentsComponent
    },
    {
        path: '**',
        redirectTo: 'start',
        pathMatch: 'full'
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];