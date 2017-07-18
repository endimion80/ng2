import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// imporar componentes

import { AccordComponent } from './accord/accord.component' ;
import { ConsultantComponent } from './consultant/consultant.component' ;

const routes: Routes = [
{path:'coordinadores', component: AccordComponent},
{path:'consultores', component: ConsultantComponent},
{path:'', redirectTo:'coordinadores', pathMatch:'full'},
{path:'**', component: AccordComponent},
];

export const appRouteProviders :any[] = [];
export const appRoutes = RouterModule.forRoot(routes);