import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SantiagoPageRoutingModule } from './santiago-routing.module';

import { SantiagoPage } from './santiago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SantiagoPageRoutingModule
  ],
  declarations: [SantiagoPage]
})
export class SantiagoPageModule {}
