import { Routes } from '@angular/router';
import { Servicio1Component } from './components/servicio1/servicio1.component';
import { Servicio2Component } from './components/servicio2/servicio2.component';
import { Servicio3Component } from './components/servicio3/servicio3.component';
import { Servicio4Component } from './components/servicio4/servicio4.component';

export const routes: Routes = [
    {path: 'servicio1', component: Servicio1Component},
    {path: 'servicio2', component: Servicio2Component},
    {path: 'servicio3', component: Servicio3Component},
    {path: 'servicio4', component: Servicio4Component}
];
