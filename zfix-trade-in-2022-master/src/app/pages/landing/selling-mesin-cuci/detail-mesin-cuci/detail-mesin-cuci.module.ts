import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMesinCuciPageRoutingModule } from './detail-mesin-cuci-routing.module';

import { DetailMesinCuciPage } from './detail-mesin-cuci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMesinCuciPageRoutingModule
  ],
  declarations: [DetailMesinCuciPage]
})
export class DetailMesinCuciPageModule {}
