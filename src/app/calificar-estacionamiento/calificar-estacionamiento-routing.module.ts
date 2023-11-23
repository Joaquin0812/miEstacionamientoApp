import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificarEstacionamientoPage } from './calificar-estacionamiento.page';

const routes: Routes = [
  {
    path: '',
    component: CalificarEstacionamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificarEstacionamientoPageRoutingModule {}
