import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsBrandPageRoutingModule } from './ps-brand-routing.module';

import { PsBrandPage } from './ps-brand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsBrandPageRoutingModule
  ],
  declarations: [PsBrandPage]
})
export class PsBrandPageModule {}
