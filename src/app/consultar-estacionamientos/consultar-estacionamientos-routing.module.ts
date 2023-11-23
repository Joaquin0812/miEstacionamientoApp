import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarEstacionamientosPage } from './consultar-estacionamientos.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarEstacionamientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarEstacionamientosPageRoutingModule {}
