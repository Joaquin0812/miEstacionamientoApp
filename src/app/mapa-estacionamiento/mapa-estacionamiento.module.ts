import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaEstacionamientoPageRoutingModule } from './mapa-estacionamiento-routing.module';

import { MapaEstacionamientoPage } from './mapa-estacionamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaEstacionamientoPageRoutingModule
  ],
  declarations: [MapaEstacionamientoPage]
})
export class MapaEstacionamientoPageModule {}
