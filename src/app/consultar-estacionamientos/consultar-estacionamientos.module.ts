import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarEstacionamientosPageRoutingModule } from './consultar-estacionamientos-routing.module';

import { ConsultarEstacionamientosPage } from './consultar-estacionamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarEstacionamientosPageRoutingModule
  ],
  declarations: [ConsultarEstacionamientosPage]
})
export class ConsultarEstacionamientosPageModule {}
