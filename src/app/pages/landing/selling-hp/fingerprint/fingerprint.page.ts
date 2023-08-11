import { Component, OnInit } from '@angular/core';
import  { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.page.html',
  styleUrls: ['./fingerprint.page.scss'],
})
export class FingerprintPage implements OnInit {
  
  constructor(
    private faio:FingerprintAIO,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    public navCtrl: NavController,
  ) { }

  ram: string;
  storages: string;
  brand: string;
  lokasi_trade: string;
  screenHasProblem: string;
  cameraHasProblem: string;
  wifiHasProblem: string;
  vibrateHasProblem: string;

  ngOnInit() {
    // this.authenticate();
    this.activatedRoute.queryParams.subscribe(params => {
      this.brand = params["brand"];
      this.ram = params["ram"];
      this.storages = params["storages"];
      this.lokasi_trade = params["lokasi_trade"];
      this.screenHasProblem = params["screenHasProblem"];
      this.cameraHasProblem = params["cameraHasProblem"];
      this.wifiHasProblem = params["wifiHasProblem"];
      this.vibrateHasProblem = params["vibrateHasProblem"];
      console.log(this.brand)
      console.log(this.ram)
      console.log(this.storages)
      console.log("Lokasi Trade"+this.lokasi_trade)
      console.log(this.screenHasProblem)
      console.log(this.cameraHasProblem)
      console.log(this.wifiHasProblem)
      console.log(this.vibrateHasProblem)
    });
  }

  authenticate(){
    this.faio.isAvailable().then(()=> {
      this.faio.show({}).then((val) => {
        alert(JSON.stringify(val));
        let navigationExtras: NavigationExtras = {
          queryParams: {
            brand: this.brand,
            ram: this.ram,
            storages: this.storages,
            lokasi_trade: this.lokasi_trade,
            screenHasProblem: this.screenHasProblem,
            cameraHasProblem: this.cameraHasProblem,
            wifiHasProblem: this.wifiHasProblem,
            vibrateHasProblem: this.vibrateHasProblem,
            fingerprintHasProblem : 0

          }
        };
        this.navCtrl.navigateForward(["landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton"], navigationExtras);      

      })
    },(err)=>{
      alert("fingerprint not available"); 
    })
  }

  skip(){
    this.presentSkip()
  }
  
  async presentSkip() {
    const alert = await this.alertController.create({
      header: 'ZFix',
      message: 'Fingerprint anda memiliki masalah!.',
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
              message: 'Jika anda lewati tahap ini, anda memverifikasi bahwa fingerprint anda memiliki masalah.',
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
                          vibrateHasProblem: this.vibrateHasProblem,
                          fingerprintHasProblem: 1
                        }
                      };
                      this.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton"], navigationExtras);
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
