import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioSesionDuenoPage } from './inicio-sesion-dueno.page';

const routes: Routes = [
  {
    path: '',
    component: InicioSesionDuenoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioSesionDuenoPageRoutingModule {}
