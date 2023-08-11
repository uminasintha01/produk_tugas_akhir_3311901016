import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenTestingPageRoutingModule } from './screen-testing-routing.module';

import { ScreenTestingPage } from './screen-testing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenTestingPageRoutingModule
  ],
  declarations: [ScreenTestingPage]
})
export class ScreenTestingPageModule {}
