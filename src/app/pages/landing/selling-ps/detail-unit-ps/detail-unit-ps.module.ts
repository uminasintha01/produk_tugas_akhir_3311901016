import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailUnitPsPageRoutingModule } from './detail-unit-ps-routing.module';

import { DetailUnitPsPage } from './detail-unit-ps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailUnitPsPageRoutingModule
  ],
  declarations: [DetailUnitPsPage]
})
export class DetailUnitPsPageModule {}
