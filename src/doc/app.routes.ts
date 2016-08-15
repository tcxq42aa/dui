/**
 * Created by charles on 16/8/3.
 */
import {Routes, RouterModule }  from '@angular/router';
import {StartComponent} from "./page/start/start.component";
import {CssComponent} from "./page/css/css.component";
import {ComponentsComponent} from "./page/components/components.component";

const appRoutes: Routes = [
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

export const routing = RouterModule.forRoot(appRoutes);