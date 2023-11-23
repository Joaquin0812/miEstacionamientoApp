import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificarClientePage } from './calificar-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: CalificarClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificarClientePageRoutingModule {}
