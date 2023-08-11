import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsBrandPage } from './ps-brand.page';

const routes: Routes = [
  {
    path: '',
    component: PsBrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsBrandPageRoutingModule {}
