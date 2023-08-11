import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KulkasBrandPageRoutingModule } from './kulkas-brand-routing.module';

import { KulkasBrandPage } from './kulkas-brand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KulkasBrandPageRoutingModule
  ],
  declarations: [KulkasBrandPage]
})
export class KulkasBrandPageModule {}
