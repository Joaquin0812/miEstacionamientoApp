import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificarEstacionamientoPageRoutingModule } from './calificar-estacionamiento-routing.module';

import { CalificarEstacionamientoPage } from './calificar-estacionamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificarEstacionamientoPageRoutingModule
  ],
  declarations: [CalificarEstacionamientoPage]
})
export class CalificarEstacionamientoPageModule {}
