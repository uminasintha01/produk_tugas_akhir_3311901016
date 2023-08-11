import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaptopBrandPageRoutingModule } from './laptop-brand-routing.module';

import { LaptopBrandPage } from './laptop-brand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaptopBrandPageRoutingModule
  ],
  declarations: [LaptopBrandPage]
})
export class LaptopBrandPageModule {}
