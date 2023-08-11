import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailUnitPage } from './detail-unit.page';

const routes: Routes = [
  {
    path: '',
    component: DetailUnitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailUnitPageRoutingModule {}
