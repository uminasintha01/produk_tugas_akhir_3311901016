import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvBrandPageRoutingModule } from './tv-brand-routing.module';

import { TvBrandPage } from './tv-brand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvBrandPageRoutingModule
  ],
  declarations: [TvBrandPage]
})
export class TvBrandPageModule {}
