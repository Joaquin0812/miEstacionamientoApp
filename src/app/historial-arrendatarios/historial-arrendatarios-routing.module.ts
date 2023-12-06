import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialArrendatariosPage } from './historial-arrendatarios.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialArrendatariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialArrendatariosPageRoutingModule {}
