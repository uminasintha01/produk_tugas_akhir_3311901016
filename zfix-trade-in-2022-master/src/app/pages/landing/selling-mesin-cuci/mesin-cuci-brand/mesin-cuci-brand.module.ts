import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesinCuciBrandPageRoutingModule } from './mesin-cuci-brand-routing.module';

import { MesinCuciBrandPage } from './mesin-cuci-brand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesinCuciBrandPageRoutingModule
  ],
  declarations: [MesinCuciBrandPage]
})
export class MesinCuciBrandPageModule {}
