import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificarClientePageRoutingModule } from './calificar-cliente-routing.module';

import { CalificarClientePage } from './calificar-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificarClientePageRoutingModule
  ],
  declarations: [CalificarClientePage]
})
export class CalificarClientePageModule {}
