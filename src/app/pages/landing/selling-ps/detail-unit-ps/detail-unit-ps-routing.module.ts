import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailUnitPsPage } from './detail-unit-ps.page';

const routes: Routes = [
  {
    path: '',
    component: DetailUnitPsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailUnitPsPageRoutingModule {}
