import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMesinCuciPage } from './detail-mesin-cuci.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMesinCuciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMesinCuciPageRoutingModule {}
