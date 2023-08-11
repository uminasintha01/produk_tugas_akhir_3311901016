import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }, 
  {
    path: 'landing',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./pages/landing/landing-routing.module').then(m => m.LandingRoutingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  // {
  //   path: 'brand2',
  //   loadChildren: () => import('./pages/brand2/brand2.module').then( m => m.Brand2PageModule)
  // },
  // {
  //   path: 'wifi-detect',
  //   loadChildren: () => import('./pages/wifi-detect/wifi-detect.module').then( m => m.WifiDetectPageModule)
  // },
  // {
  //   path: 'detail',
  //   loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  // },
  // {
  //   path: 'allbuntton',
  //   loadChildren: () => import('./pages/allbuntton/allbuntton.module').then( m => m.AllbunttonPageModule)
  // },
 
  // {
  //   path: 'camera',
  //   loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule)
  // },
  // {
  //   path: 'screen-testing',
  //   loadChildren: () => import('./pages/screen-testing/screen-testing.module').then( m => m.ScreenTestingPageModule)
  // },
  
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
