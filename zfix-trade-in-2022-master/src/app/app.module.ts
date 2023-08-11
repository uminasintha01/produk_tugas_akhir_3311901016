import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { UniqueDeviceID } from "@ionic-native/unique-device-id/ngx";
import { Uid } from "@ionic-native/uid/ngx";
import { ExtendedDeviceInformation } from "@ionic-native/extended-device-information/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { Device } from "@ionic-native/device/ngx";
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Keyboard } from "@ionic-native/keyboard/ngx";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AudioManagement } from '@ionic-native/audio-management/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import  { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { PopoverComponent } from 'src/app/pages/landing/popover/popover.component';

@NgModule({
  declarations: [
    AppComponent,
    PopoverComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxQRCodeModule,
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    UniqueDeviceID,
    Uid,
    AndroidPermissions,
    ExtendedDeviceInformation,
    Device,
    File,
    Camera,
    CameraPreview,
    SocialSharing,
    Clipboard,
    Keyboard,
    LocalNotifications,
    PhonegapLocalNotification,
    BackgroundMode,
    AppVersion,
    Network,
    Vibration,
    AudioManagement,
    NativeAudio,
    FingerprintAIO,
    OneSignal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
