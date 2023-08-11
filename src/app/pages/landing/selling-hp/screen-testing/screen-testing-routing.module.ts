import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenTestingPage } from './screen-testing.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenTestingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenTestingPageRoutingModule {}
