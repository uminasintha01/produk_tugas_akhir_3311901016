import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';
import { Keyboard } from "@ionic-native/keyboard/ngx";


@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(
    private toastCtrl: ToastController,
    public alertController: AlertController, 
    private splashScreen: SplashScreen,
    private router: Router,
    private keyboard: Keyboard
    ) { }

  async showToast(data) {
    let toast = await this.toastCtrl.create({
    message: data,
    duration: 2000
    })
    toast.present();
  }

  async showAlert(data) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ZFix',
      message: data,
      buttons: ['OK']
    });

    alert.present();
  }

  async restart(data) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ZFix',
      message: data,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.splashScreen.show();
            location.href = "/landing";
            setTimeout(() => {
              this.splashScreen.hide();
            }, 3000);
            
          }
        }
      ]
    });

    alert.present();
  }

  async done(data) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ZFix',
      message: data,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigate([
              "/landing",
            ]);
            
          }
        }
      ]
    });

    alert.present();
  }

  hideKeyboard() {
    this.keyboard.hide();
  }
  
}
