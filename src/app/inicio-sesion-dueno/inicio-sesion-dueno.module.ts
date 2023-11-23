import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSesionDuenoPageRoutingModule } from './inicio-sesion-dueno-routing.module';

import { InicioSesionDuenoPage } from './inicio-sesion-dueno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioSesionDuenoPageRoutingModule
  ],
  declarations: [InicioSesionDuenoPage]
})
export class InicioSesionDuenoPageModule {}
