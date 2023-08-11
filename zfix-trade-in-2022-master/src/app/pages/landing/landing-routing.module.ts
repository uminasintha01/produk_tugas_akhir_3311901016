import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: 'type',
    loadChildren: () => import('./type/type.module').then( m => m.TypePageModule)
  },
  {
    path: 'selling-phone',
    loadChildren: () => import('./selling-hp/brand2/brand2.module').then( m => m.Brand2PageModule)
  },
  {
    path: 'selling-phone/screen-testing',
    loadChildren: () => import('./selling-hp/screen-testing/screen-testing.module').then( m => m.ScreenTestingPageModule)
  },
   
  {
    path: 'selling-phone/screen-testing/camera',
    loadChildren: () => import('./selling-hp/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'selling-phone/screen-testing/camera/wifi-detect',
    loadChildren: () => import('./selling-hp/wifi-detect/wifi-detect.module').then( m => m.WifiDetectPageModule)
  },
  {
    path: 'selling-phone/screen-testing/camera/wifi-detect/vibration',
    loadChildren: () => import('./selling-hp/vibration/vibration.module').then( m => m.VibrationPageModule)
  },
   {
    path: 'selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint',
    loadChildren: () => import('./selling-hp/fingerprint/fingerprint.module').then( m => m.FingerprintPageModule)
  },
  {
    path: 'selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton',
    loadChildren: () => import('./selling-hp/allbuntton/allbuntton.module').then( m => m.AllbunttonPageModule)
  },
  {
    path: 'selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail',
    loadChildren: () => import('./selling-hp/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'laptop-brand',
    loadChildren: () => import('./selling-laptop/laptop-brand/laptop-brand.module').then( m => m.LaptopBrandPageModule)
  },
  {
    path: 'laptop-brand/detail-unit',
    loadChildren: () => import('./selling-laptop/detail-unit/detail-unit.module').then( m => m.DetailUnitPageModule)
  },
  {
    path: 'ps-brand',
    loadChildren: () => import('./selling-ps/ps-brand/ps-brand.module').then( m => m.PsBrandPageModule)
  },
  {
    path: 'ps-brand/detail-unit-ps',
    loadChildren: () => import('./selling-ps/detail-unit-ps/detail-unit-ps.module').then( m => m.DetailUnitPsPageModule)
  },
  {
    path: 'tv-brand',
    loadChildren: () => import('./selling-tv/tv-brand/tv-brand.module').then( m => m.TvBrandPageModule)
  },
  {
    path: 'tv-brand/detail-tv',
    loadChildren: () => import('./selling-tv/detail-tv/detail-tv.module').then( m => m.DetailTvPageModule)
  },
  {
    path: 'kulkas-brand',
    loadChildren: () => import('./selling-kulkas/kulkas-brand/kulkas-brand.module').then( m => m.KulkasBrandPageModule)
  },
  {
    path: 'kulkas-brand/detail-kulkas',
    loadChildren: () => import('./selling-kulkas/detail-kulkas/detail-kulkas.module').then( m => m.DetailKulkasPageModule)
  },
  {
    path: 'mesin-cuci-brand',
    loadChildren: () => import('./selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.module').then( m => m.MesinCuciBrandPageModule)
  },
  {
    path: 'mesin-cuci-brand/detail-mesin-cuci',
    loadChildren: () => import('./selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.module').then( m => m.DetailMesinCuciPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./settings/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'outlet',
    loadChildren: () => import('./settings/outlet/outlet.module').then( m => m.OutletPageModule)
  },
  {
    path: 'call-us',
    loadChildren: () => import('./settings/call-us/call-us.module').then( m => m.CallUsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./settings/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./settings/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./settings/history/history.module').then( m => m.HistoryPageModule)
  },
 
  
 

 
  


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
