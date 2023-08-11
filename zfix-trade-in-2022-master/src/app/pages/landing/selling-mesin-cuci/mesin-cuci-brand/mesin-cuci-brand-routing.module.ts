import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesinCuciBrandPage } from './mesin-cuci-brand.page';

const routes: Routes = [
  {
    path: '',
    component: MesinCuciBrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesinCuciBrandPageRoutingModule {}
