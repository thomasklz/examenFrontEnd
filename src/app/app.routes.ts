import { Routes } from '@angular/router';
import { CineComponent } from './cine/cine.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ReservaComponent } from './reserva/reserva.component';

export const routes: Routes = [{
    path: 'cine', component:CineComponent
},
{
    path:'habitaciones', component:HabitacionesComponent
},{
    path:'reserva', component:ReservaComponent
}
];
