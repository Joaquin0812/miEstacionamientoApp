import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuenoPageRoutingModule } from './dueno-routing.module';

import { DuenoPage } from './dueno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuenoPageRoutingModule
  ],
  declarations: [DuenoPage]
})
export class DuenoPageModule {}
