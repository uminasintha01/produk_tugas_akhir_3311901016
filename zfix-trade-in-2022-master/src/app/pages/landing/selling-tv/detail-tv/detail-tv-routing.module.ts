import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTvPage } from './detail-tv.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTvPageRoutingModule {}
