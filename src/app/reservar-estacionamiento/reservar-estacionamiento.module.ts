import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservarEstacionamientoPageRoutingModule } from './reservar-estacionamiento-routing.module';

import { ReservarEstacionamientoPage } from './reservar-estacionamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservarEstacionamientoPageRoutingModule
  ],
  declarations: [ReservarEstacionamientoPage]
})
export class ReservarEstacionamientoPageModule {}
