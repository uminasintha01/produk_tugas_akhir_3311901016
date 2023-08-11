import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';
import { UtilitiesService } from "../../../../services/utilities.service";
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { SellingApiService } from './../../../../services/api/selling-api.service';
import { HelperService } from '../../../../services/helper.service';
import { Device } from "@ionic-native/device/ngx";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { MembershipService } from "../../../../services/membership.service";
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { ActivationKey } from "../../../../config/api";
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  images = [];

  constructor(
    private camera: Camera, 
    private toastCtrl: ToastController,
    private utility: UtilitiesService,
    public alertController: AlertController,
    public navCtrl: NavController,
    public utilsService: UtilitiesService, 
    private storage: Storage,
    private selling: MembershipService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cameraPreview: CameraPreview

    ) { }

    ram: string;
    storages: string;
    brand: string;
    lokasi_trade: string;
    screenHasProblem: string;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.brand = params["brand"];
      this.ram = params["ram"];
      this.storages = params["storages"];
      this.lokasi_trade = params["lokasi_trade"];
      this.screenHasProblem = params["screenHasProblem"];
      console.log(this.storages)
      console.log(this.ram)
      console.log(this.brand)
      console.log("lokasi trade"+this.lokasi_trade)
      console.log(this.screenHasProblem)

    });
  }

  cameras(){
    this.cameraPreview.startCamera({x: 80, y: 150, width: 250, height: 300, toBack: false}).then(()=> {
      // alert(val);
      setInterval(() => { 
        this.cameraPreview.takePicture().then(()=> {
          this.cameraPreview.stopCamera(); 
          this.cameras2();
        })
      }, 7000);
    }, (err)=> {
      alert("Camera Tidak Aktif");
    })
  }

  cameras2(){
    this.cameraPreview.startCamera({x: 80, y: 150, width: 250, height: 300}).then(()=> {
      this.cameraPreview.switchCamera();
      setInterval(() => { 
        this.cameraPreview.takePicture().then(()=> {
          this.cameraPreview.stopCamera();
          this.utility.showToast("Test camera telah bershasil!.");
          let navigationExtras: NavigationExtras = {
            queryParams: {
              brand: this.brand,
              ram: this.ram,
              storages: this.storages,
              lokasi_trade: this.lokasi_trade,
              screenHasProblem: this.screenHasProblem,
              cameraHasProblem: 0,
            }
          };
          this.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera/wifi-detect"], navigationExtras);      
        })
      }, 7000);
    }, (err)=> {
      alert("Camera Tidak Aktif");
    })
  }

  takePicture() {
    try {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
      }
      
      this.camera.getPicture(options).then((imageData) => {
        this.utility.showToast("Test camera telah bershasil!.");
        let navigationExtras: NavigationExtras = {
          queryParams: {
            brand: this.brand,
            ram: this.ram,
            storages: this.storages,
            lokasi_trade: this.lokasi_trade,
            screenHasProblem: this.screenHasProblem,
            cameraHasProblem: 0,
          }
        };
        this.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera/wifi-detect"], navigationExtras);      
      });
    } catch(err) {
      this.presentAlertConfirm()
    }
  }

  skip(){
    this.presentAlertConfirm()
  }
  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'ZFix',
      message: 'Camera anda memiliki masalah!.',
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
              message: 'Jika anda lewati tahap ini, anda memverifikasi bahwa camera anda memiliki masalah.',
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
                            cameraHasProblem: 1,

                        }
                      };
                      this.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera"], navigationExtras);
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
