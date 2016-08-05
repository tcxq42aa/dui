/**
 * Created by charles on 16/8/3.
 */
import { provideRouter, RouterConfig }  from '@angular/router';
import {StartComponent} from "./start/start.component";
import {CssComponent} from "./css/css.component";
import {ComponentsComponent} from "./components/components.component";
import {PluginsComponent} from "./plugins/plugins.component";

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
        path: 'plugins',
        component: PluginsComponent
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