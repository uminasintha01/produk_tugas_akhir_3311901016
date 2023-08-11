import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailKulkasPage } from './detail-kulkas.page';

const routes: Routes = [
  {
    path: '',
    component: DetailKulkasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailKulkasPageRoutingModule {}
