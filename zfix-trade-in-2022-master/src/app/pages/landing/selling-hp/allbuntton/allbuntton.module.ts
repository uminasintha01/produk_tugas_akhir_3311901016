import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllbunttonPageRoutingModule } from './allbuntton-routing.module';

import { AllbunttonPage } from './allbuntton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllbunttonPageRoutingModule
  ],
  declarations: [AllbunttonPage]
})
export class AllbunttonPageModule {}
