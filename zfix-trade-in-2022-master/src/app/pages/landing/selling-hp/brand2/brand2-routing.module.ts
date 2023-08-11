import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Brand2Page } from './brand2.page';

const routes: Routes = [
  {
    path: '',
    component: Brand2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Brand2PageRoutingModule {}
