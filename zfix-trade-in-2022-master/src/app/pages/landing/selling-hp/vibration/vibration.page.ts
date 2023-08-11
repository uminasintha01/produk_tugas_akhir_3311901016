import { Vibration } from '@ionic-native/vibration/ngx';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.page.html',
  styleUrls: ['./vibration.page.scss'],
})
export class VibrationPage implements OnInit {

  constructor(
    private v: Vibration,
    public navCtrl: NavController,
    private change:ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,

    
      ) { }
      ram: string;
      storages: string;
      brand: string;
      lokasi_trade: string;
      screenHasProblem: string;
      cameraHasProblem: string;
      wifiHasProblem: string;


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.brand = params["brand"];
      this.ram = params["ram"];
      this.storages = params["storages"];
      this.lokasi_trade = params["lokasi_trade"];
      this.screenHasProblem = params["screenHasProblem"];
      this.cameraHasProblem = params["cameraHasProblem"];
      this.wifiHasProblem = params["wifiHasProblem"];
      console.log(this.storages)
      console.log(this.ram)
      console.log(this.brand)
      console.log("Lokasi Trade"+this.lokasi_trade)
      console.log(this.screenHasProblem)
      console.log(this.cameraHasProblem)
      console.log(this.wifiHasProblem)
    });
  }
  
  vibrate(){
    try {
      this.v.vibrate([2000,1000,2000]);
      let navigationExtras: NavigationExtras = {
        queryParams: {
          brand: this.brand,
          ram: this.ram,
          storages: this.storages,
          lokasi_trade: this.lokasi_trade,
          screenHasProblem: this.screenHasProblem,
          cameraHasProblem: this.cameraHasProblem,
          wifiHasProblem: this.wifiHasProblem,
          vibrateHasProblem: 0
        }
      };
      this.navCtrl.navigateForward(["landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint"], navigationExtras);      
      
    } catch(err) {
      alert("error")
    }
  }

  // stop(){
  //   this.v.vibrate(0);
  // }


  skip(){
    this.presentSkip()
  }
  
  async presentSkip() {
    const alert = await this.alertController.create({
      header: 'ZFix',
      message: 'Vibration anda memiliki masalah!.',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Coba Lagi',
          role: 'cancel',
          handler: () => {
            console.log('Continue');
          }
        }, {
          text: 'Lewati',
          handler: async () => {
            const alert = await this.alertController.create({
              header: 'ZFix',
              message: 'Jika anda lewati tahap ini, anda memverifikasi bahwa vibration anda memiliki masalah.',
              backdropDismiss: false,
              buttons: [      
                {
                  text: 'Lanjut',
                  role: 'cancel',
                  handler: () => {
                    // console.log('Continue');
                  }
                },{
                    text: 'Tetap lewati',
                    handler: () => {
                      let navigationExtras: NavigationExtras = {
                        queryParams: {
                          brand: this.brand,
                          ram: this.ram,
                          storages: this.storages,
                          lokasi_trade: this.lokasi_trade,
                          screenHasProblem: this.screenHasProblem,
                          cameraHasProblem: this.cameraHasProblem,
                          wifiHasProblem: this.wifiHasProblem,
                          vibrateHasProblem: 1
                        }
                      };
                      this.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint"], navigationExtras);
                    }
                  }

              ]
            });
            await alert.present();
          }
        }, 
      ]
    });

    await alert.present();
  }
}
