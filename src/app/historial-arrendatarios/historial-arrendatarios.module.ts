import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialArrendatariosPageRoutingModule } from './historial-arrendatarios-routing.module';

import { HistorialArrendatariosPage } from './historial-arrendatarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialArrendatariosPageRoutingModule
  ],
  declarations: [HistorialArrendatariosPage]
})
export class HistorialArrendatariosPageModule {}
