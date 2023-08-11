import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  rootPage: any = 'Tabs';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router,
    public storage: Storage,
    private network: Network,
    public alerController: AlertController,
    public oneSignal: OneSignal,
  ) {
    this.initializeApp();
    window.addEventListener('offline', () => {
      this.openAlert();
    })


  }
  
  private onPushReceived(payload: OSNotificationPayload) {
    // alert('Push recevied:' + payload.body);
  }

  private onPushOpened(payload: OSNotificationPayload) {
    // alert('Push opened: ' + payload.body);
  }
  async openAlert() {
    const alert = await this.alerController.create({
      header: 'Check Network Connection',
      message: 'You do not have Internet Connection',
      buttons: [{
        text: "OK",

      }]
    });
    await alert.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.oneSignal.startInit('65e23d04-6a84-441a-9bed-767d7646033e', '325212809157')

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
      this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
      this.oneSignal.endInit();

      // this.oneSignal.setExternalUserId('KEMARAUAJA')


      this.statusBar.styleLightContent();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);

      this.authService.checkToken();

      setTimeout(() => {
        this.authService.authenticationState.subscribe(state => {

          // console.log(state);

          if (state) {
            this.router.navigate(['landing', 'type']);
          }
          else {
            this.router.navigate(['login']);
          }
        })
      }, 1000);

    });
  }
}


