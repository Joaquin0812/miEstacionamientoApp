import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaEstacionamientoPage } from './mapa-estacionamiento.page';

const routes: Routes = [
  {
    path: '',
    component: MapaEstacionamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaEstacionamientoPageRoutingModule {}
