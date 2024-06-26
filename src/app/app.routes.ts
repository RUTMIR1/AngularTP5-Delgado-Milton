import { Routes } from '@angular/router';
import { Servicio1Component } from './components/servicio1/servicio1.component';
import { Servicio2Component } from './components/servicio2/servicio2.component';
import { Servicio3Component } from './components/servicio3/servicio3.component';
import { Servicio4Component } from './components/servicio4/servicio4.component';
import { Prueba1Component } from './components/prueba1/prueba1.component';
import { Servicio5Component } from './components/servicio5/servicio5.component';

export const routes: Routes = [
    {path: 'servicio1', component: Servicio1Component},
    {path: 'servicio2', component: Servicio2Component},
    {path: 'servicio3', component: Servicio3Component},
    {path: 'servicio4', component: Servicio4Component},
    {path: 'prueba1', component: Prueba1Component},
    {path: 'servicio5', component: Servicio5Component},
    {path: '**', component: Servicio1Component}

];
