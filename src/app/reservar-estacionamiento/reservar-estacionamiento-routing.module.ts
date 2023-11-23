import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservarEstacionamientoPage } from './reservar-estacionamiento.page';

const routes: Routes = [
  {
    path: '',
    component: ReservarEstacionamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservarEstacionamientoPageRoutingModule {}
