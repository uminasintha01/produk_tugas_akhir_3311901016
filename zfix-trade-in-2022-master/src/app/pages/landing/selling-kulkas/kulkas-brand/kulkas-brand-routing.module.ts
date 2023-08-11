import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KulkasBrandPage } from './kulkas-brand.page';

const routes: Routes = [
  {
    path: '',
    component: KulkasBrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KulkasBrandPageRoutingModule {}
