import { Component, ViewChild } from "@angular/core";
import { Platform } from "@ionic/angular";
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

@Component({
  selector: "app-screen-testing",
  templateUrl: "./screen-testing.page.html",
  styleUrls: ["./screen-testing.page.scss"],
})
export class ScreenTestingPage {

  @ViewChild("screenTest", { static: false })

  canvas: any;
  canvasElement: any;
  saveX: number;
  saveY: number;

  lineWidth = 10;
  touching = false;
 
  constructor(
    private platform: Platform,
    private utility: UtilitiesService,
    public alertController: AlertController,
    public navCtrl: NavController,
    public utilsService: UtilitiesService, 
    private storage: Storage,
    private selling: MembershipService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {}

  ram: string;
  storages: string;
  brand: string;
  lokasi_trade: string;
  
  ngOnInit() {
    // this.getCode();
    this.activatedRoute.queryParams.subscribe(params => {
      this.brand = params["brand"];
      this.ram = params["ram"];
      this.storages = params["storages"];
      this.lokasi_trade = params["lokasi_trade"];
      console.log(this.storages)
      console.log(this.ram)
      console.log(this.brand)
      console.log("lokasi trade"+ this.lokasi_trade)

    });
  }

  ionViewWillEnter() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.platform.width() + "";
    this.canvasElement.height = this.platform.height() + "";

    let ctx = this.canvasElement.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(
      10,
      10,
      this.canvasElement.width - 20,
      this.canvasElement.height - 20
    );

    this.utility.showToast("Bersihkan layar untuk melanjutkan.");
  }

  startTouch(event) {
    this.touching = true;

    this.test(event);
  }

  moveTouch(event) {
    if (!this.touching) return;

    this.test(event);
  }

  endTouch() {
    this.touching = false;
    this.checkCanvas();
  }

  test(event) {
    const canvasPosition = this.canvasElement.getBoundingClientRect();
    let ctx = this.canvasElement.getContext("2d");

    let currentX;
    let currentY;
    var i;
    for (i = 0; i < event.changedTouches.length; i++) {
      currentX = event.changedTouches[i].pageX - canvasPosition.x;
      currentY = event.changedTouches[i].pageY - canvasPosition.y;
    }

    ctx.beginPath();
    ctx.globalCompositeOperation = "destination-out";
    ctx.arc(currentX, currentY, 42, 0, Math.PI * 2, false);
    ctx.fill();

    this.saveX = currentX;
    this.saveY = currentY;
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'ZFix',
      message: 'Jika anda tidak dapat melanjutkan test ini, anda bisa melewati dan lanjut ke tahap selanjutnya dengan konfirmasi bahwa layar memiliki masalah.',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Lanjut',
          role: 'cancel',
          handler: () => {
            console.log('Continue');
          }
        }, {
          text: 'Lewati',
          handler: async () => {
            const alert = await this.alertController.create({
              header: 'ZFix',
              message: 'Jika anda skip tahap ini, anda memverifikasi bahwa layar anda memiliki masalah.',
              backdropDismiss: false,
              buttons: [      
                {
                  text: 'Lanjut',
                  role: 'cancel',
                  handler: () => {
                    // console.log('Continue');
                  }
                },{
                    text: 'Tetap skip',
                    handler: () => {
                      let navigationExtras: NavigationExtras = {
                        queryParams: {
                            brand: this.brand,
                            ram: this.ram,
                            storages: this.storages,
                            lokasi_trade: this.lokasi_trade,
                            screenHasProblem: 1,
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
        // {
        //   text: 'Lewati',
        //   handler: () => {
        //     let navigationExtras: NavigationExtras = {
        //       queryParams: {
        //         screenHasProblem: 1,
        //       }
        //     };
        //     this.navCtrl.navigateForward(["/landing/membership-activation/device-detail/screen-testing/device-image"], navigationExtras);
        //     this.utility.showToast("Layar memiliki masalah.");
        //   }
        // }
      ]
    });

    await alert.present();
  }

  isCanvasBlank(canvas) {
    let ctx = this.canvasElement.getContext("2d");

    const pixelBuffer = new Uint32Array(
      ctx.getImageData(0, 0, canvas.width, canvas.height).data.buffer
    );

    return !pixelBuffer.some((color) => color !== 0);
  }

  checkCanvas() {
    const blank = this.isCanvasBlank(this.canvasElement);

    if (blank) {
      this.utility.showToast("Layar telah bersih.");
      let navigationExtras: NavigationExtras = {
        queryParams: {
          brand: this.brand,
          ram: this.ram,
          storages: this.storages,
          lokasi_trade: this.lokasi_trade,
          screenHasProblem: 0,
        }
      };
      this.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera"], navigationExtras);
    } else {
      this.utility.showToast("Layar belum dibersihkan.");
      this.presentAlertConfirm()
    }
  }

  // getCode() {
  //   this.storage.get(tokenKey).then((token) => {
  //     this.storage.get(ActivationKey).then((data) => {
  //       let membershipActivation = {
  //         brand: data.brand,
  //         ram: data.ram,
  //         storage: data.storage,
  //       }
  //       console.log(membershipActivation)
  //     });
  //   });
  // }

}