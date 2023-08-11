import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailKulkasPageRoutingModule } from './detail-kulkas-routing.module';

import { DetailKulkasPage } from './detail-kulkas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailKulkasPageRoutingModule
  ],
  declarations: [DetailKulkasPage]
})
export class DetailKulkasPageModule {}
