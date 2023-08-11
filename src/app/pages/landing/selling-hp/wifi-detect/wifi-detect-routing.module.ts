import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WifiDetectPage } from './wifi-detect.page';

const routes: Routes = [
  {
    path: '',
    component: WifiDetectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WifiDetectPageRoutingModule {}
