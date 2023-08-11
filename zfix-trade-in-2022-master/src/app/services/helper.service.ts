import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(    
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    ) { }

  async alertMessage(type, message) {
    const alert = await this.alertCtrl.create({
      header: type,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
