import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvBrandPage } from './tv-brand.page';

const routes: Routes = [
  {
    path: '',
    component: TvBrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvBrandPageRoutingModule {}
