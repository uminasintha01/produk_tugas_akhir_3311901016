import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {Network,ConnectionStatus} from "@capacitor/network";
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

declare var navigator;

@Component({
  selector: 'app-wifi-detect',
  templateUrl: './wifi-detect.page.html',
  styleUrls: ['./wifi-detect.page.scss'],
})
export class WifiDetectPage implements OnInit {

  status:string="";
  connectionType:string="";
  type:string="";

  constructor(private change:ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    public navCtrl: NavController,
    )  { }

   ram: string;
   storages: string;
   brand: string;
   lokasi_trade: string;
   screenHasProblem: string;
   cameraHasProblem: string;

  ngOnInit() {
  this.type = navigator.connection.effectiveType;
  // this.getNetworkStatus();

 this.activatedRoute.queryParams.subscribe(params => {
      this.brand = params["brand"];
      this.ram = params["ram"];
      this.storages = params["storages"];
      this.lokasi_trade = params["lokasi_trade"];
      this.screenHasProblem = params["screenHasProblem"];
      this.cameraHasProblem = params["cameraHasProblem"];
      console.log(this.storages)
      console.log(this.ram)
      console.log(this.brand)
      console.log("Lokasi Trade"+this.lokasi_trade)
      console.log(this.screenHasProblem)
      console.log(this.cameraHasProblem)

    });
  }

  getNetworkStatus(){
    Network.getStatus().then(
      (status:ConnectionStatus)=>{
        this.status = (status.connected)?
        "connected" : "disconnected";
        this.connectionType = status.connectionType;
        this.onNetworkChanged();

        if (this.status == "connected") {
          this.presentAlertConfirm();
          console.log("bisa nih!")
        }
        console.log(this.status);
      })
  }

  onNetworkChanged()
  {
    Network.addListener("networkStatusChange",(status)=>{
      this.status = (status.connected)?
      "connected" : "disconnected";
      this.connectionType = status.connectionType;
      this.change.detectChanges();
    })
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'ZFix',
      message: 'Koneksi telah berhasil. Lanjut ke tahap selanjutnya?.',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'yourClass',
          handler: () => {}
        }, {
          text: 'Iya',
          handler: () => {
            let navigationExtras: NavigationExtras = {
              queryParams: {
                brand: this.brand,
                ram: this.ram,
                storages: this.storages,
                lokasi_trade: this.lokasi_trade,
                screenHasProblem: this.screenHasProblem,
                cameraHasProblem: this.cameraHasProblem,
                wifiHasProblem: 0
              }
            };
            this.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera/wifi-detect/vibration"], navigationExtras);
              
          }
        }, 
      ]
    });
    await alert.present();
  }

  skip(){
    this.presentSkip()
  }
  
  async presentSkip() {
    const alert = await this.alertController.create({
      header: 'ZFix',
      message: 'Wifi anda memiliki masalah!.',
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
              message: 'Jika anda lewati tahap ini, anda memverifikasi bahwa wifi anda memiliki masalah.',
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
                            wifiHasProblem: 1
                        }
                      };
                      this.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera/wifi-detect/vibration"], navigationExtras);
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
