import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { Router } from '@angular/router';
import { MembershipService } from "../../../../services/membership.service";


@Component({
  selector: 'app-allbuntton',
  templateUrl: './allbuntton.page.html',
  styleUrls: ['./allbuntton.page.scss'],
})
export class AllbunttonPage implements OnInit {

  resultPowerButton = false;
  resultVolumeUpButton = false;
  resultVolumeDownButton = false;
  ram: string;
  storages: string;
  brand: string;
  lokasi_trade: string;
  screenHasProblem: string;
  cameraHasProblem: string;
  wifiHasProblem: string;
  vibrateHasProblem: string;
  fingerprintHasProblem: string;

  constructor(
    private platform: Platform,
    public alertController: AlertController,
    public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private selling: MembershipService,
    private router: Router,
  
    ) { 
  //   platform.ready().then(() => {    
  //     this.powerbutton();

  // });
  }

  ngOnInit() {
    this.volumeup();
    this.volumedown();
    this.powerbutton();
    this.activatedRoute.queryParams.subscribe(params => {

    this.brand = params["brand"];
    this.ram = params["ram"];
    this.storages = params["storages"];
    this.lokasi_trade = params["lokasi_trade"];
    this.screenHasProblem = params["screenHasProblem"];
    this.cameraHasProblem = params["cameraHasProblem"];
    this.wifiHasProblem = params["wifiHasProblem"];
    this.vibrateHasProblem = params["vibrateHasProblem"];
    this.fingerprintHasProblem = params["fingerprintHasProblem"];
    console.log('brand', this.brand)
    console.log('storage', this.storages)
    console.log('ram', this.ram)
    console.log('lokasi trade', this.lokasi_trade)
    console.log('screen', this.screenHasProblem)
    console.log('camera', this.cameraHasProblem)
    console.log('wifi', this.wifiHasProblem)
    console.log('finger', this.fingerprintHasProblem)

    });
  }
 

  volumeup()  {
    //   document.addEventListener("volumeupbutton", callback, false);  
    //   function callback() { 
    //     alert('Tekan Tombol Volume Bawah');
    //     document.removeEventListener("volumedownbutton",callback, false)
    // }
    document.addEventListener("volumeupbutton", callbackFunction, false);
    function callbackFunction() {
      if (this.resultVolumeUpButton != true) {
        
        alert('Volume Up Button is pressed!');
      }
      // console.log(this.resultVolumeUpButton);
      
      this.resultVolumeUpButton = true;  
    }
  }

  volumedown() {
    //   document.addEventListener("volumedownbutton", callback, false);
    //   function callback() {
    //   alert('Tombol Volume anda Normal. Selanjutnya tekan tombol power on/of hp anda');
    //   document.removeEventListener("volumedownbutton",callback, false)
    // }
    document.addEventListener("volumedownbutton", callbackFunction, false);
    function callbackFunction() {
      if (this.resultVolumeDownButton != true) {
        
        alert('Volume Down Button is pressed!');
      }
      // console.log(this.resultVolumeDownButton);
      
      this.resultVolumeDownButton = true;  
    }
  }
 
  powerbutton() {
    this.platform.resume.subscribe(() => {
      if (this.resultPowerButton != true) {
        
        alert('Power Button Button is pressed!');
      }
      // console.log(this.resultPowerButton);
      
      this.resultPowerButton = true;  
    
      // alert('[INFO] Test button sudah selesai, lanjut ke tahap selanjutnya');
      // this.back();
    });
  }

  submit(){
    if(this.resultPowerButton == true || this.resultVolumeDownButton == true || this.resultVolumeUpButton == true) {
      this.normal();
    }
    else {
      this.notNormal();
    }
  }

  async normal() {

    const alert = await this.alertController.create({
      header: 'ZFix',
      message: 'Test button anda telah berhasi. Ingin lanjut?',
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
            let data = {
              brand: this.brand,
              ram: this.ram,
              storages: this.storages,
              lokasi_trade: this.lokasi_trade,
              screenHasProblem: this.screenHasProblem,
              cameraHasProblem: this.cameraHasProblem,
              wifiHasProblem: this.wifiHasProblem,
              vibrateHasProblem: this.vibrateHasProblem,
              fingerprintHasProblem: this.fingerprintHasProblem,
              buttonHasProblem: 0,
            }
            this.selling.SetSelling(data);
            this.router.navigate([
              "/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail",
            ]);
          
          }
        }, 
      ]
    });
    await alert.present();
}
   
  async notNormal() {

    const alert = await this.alertController.create({
      header: 'ZFix',
      message: 'Ada button yang belum dipencet!. Apa anda ingin melanjutkan?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'yourClass',
          handler: () => {
          }
        }, {
          text: 'Iya',
          handler: async () => {
            const alert = await this.alertController.create({
              header: 'ZFix',
              message: 'Jika anda tekan iya, anda memverifikasi bahwa button anda memiliki masalah.',
              backdropDismiss: false,
              buttons: [ 
                {
                  text: 'Tidak',
                  role: 'cancel',
                  handler: () => {
                  }
                },{
                    text: 'Iya',
                    handler: () => {
                      let data = {
                        brand: this.brand,
                        ram: this.ram,
                        storages: this.storages,
                        lokasi_trade: this.lokasi_trade,
                        screenHasProblem: this.screenHasProblem,
                        cameraHasProblem: this.cameraHasProblem,
                        wifiHasProblem: this.wifiHasProblem,
                        fingerprintHasProblem: this.fingerprintHasProblem,
                        buttonHasProblem: 1,
                      }
                      this.selling.SetSelling(data);
                      this.router.navigate([
                        "/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail",
                      ]);
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

  skip(){
    this.presentSkip()
  }
  
  async presentSkip() {
    const alert = await this.alertController.create({
      header: 'ZFix',
      message: 'Tombol anda memiliki masalah!.',
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
              message: 'Jika anda lewati tahap ini, anda memverifikasi bahwa tombol anda memiliki masalah.',
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
                      let data = {
                        brand: this.brand,
                        ram: this.ram,
                        storages: this.storages,
                        lokasi_trade: this.lokasi_trade,
                        screenHasProblem: this.screenHasProblem,
                        cameraHasProblem: this.cameraHasProblem,
                        wifiHasProblem: this.wifiHasProblem,
                        fingerprintHasProblem: this.fingerprintHasProblem,
                        buttonHasProblem: 1,
                      }
                      this.selling.SetSelling(data);
                      this.router.navigate([
                        "/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail",
                      ]);
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
