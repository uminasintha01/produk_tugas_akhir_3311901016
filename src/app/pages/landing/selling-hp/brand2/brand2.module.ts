import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Brand2PageRoutingModule } from './brand2-routing.module';

import { Brand2Page } from './brand2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Brand2PageRoutingModule
  ],
  declarations: [Brand2Page]
})
export class Brand2PageModule {}
