import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuenoPage } from './dueno.page';

const routes: Routes = [
  {
    path: '',
    component: DuenoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuenoPageRoutingModule {}
