import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTvPageRoutingModule } from './detail-tv-routing.module';

import { DetailTvPage } from './detail-tv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTvPageRoutingModule
  ],
  declarations: [DetailTvPage]
})
export class DetailTvPageModule {}
