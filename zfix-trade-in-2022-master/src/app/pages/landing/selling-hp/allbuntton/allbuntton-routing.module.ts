import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllbunttonPage } from './allbuntton.page';

const routes: Routes = [
  {
    path: '',
    component: AllbunttonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllbunttonPageRoutingModule {}
