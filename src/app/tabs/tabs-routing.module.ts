import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'landing',
    component: TabsPage,
    children: [ 
      {
        path: 'type',
        loadChildren: () => import('../pages/landing/type/type.module').then( m => m.TypePageModule)
      },
      {
        path: 'inbox',
        loadChildren: () => import('../pages/landing/inbox/inbox.module').then( m => m.InboxPageModule)
      },
      {
        path: 'my-qr',
        loadChildren: () => import('../pages/landing/my-qr/my-qr.module').then( m => m.MyQrPageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('../pages/landing/settings/index/index.module').then( m => m.IndexPageModule)
      },
       
      {
        path: '',
        redirectTo: '/landing/type/',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '',
    redirectTo: '/landing/type/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
