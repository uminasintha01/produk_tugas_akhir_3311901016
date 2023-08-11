import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WifiDetectPageRoutingModule } from './wifi-detect-routing.module';

import { WifiDetectPage } from './wifi-detect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WifiDetectPageRoutingModule
  ],
  declarations: [WifiDetectPage]
})
export class WifiDetectPageModule {}
