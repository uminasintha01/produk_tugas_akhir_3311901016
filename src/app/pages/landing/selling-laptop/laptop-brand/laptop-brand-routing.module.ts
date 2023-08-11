import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaptopBrandPage } from './laptop-brand.page';

const routes: Routes = [
  {
    path: '',
    component: LaptopBrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaptopBrandPageRoutingModule {}
