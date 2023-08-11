import { Component, OnInit } from '@angular/core';
import { SellingApiService } from './../../../../services/api/selling-api.service';
import { HelperService } from '../../../../services/helper.service';
import { Device } from "@ionic-native/device/ngx";
import { UtilitiesService } from '../../../../services/utilities.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { MembershipService } from "../../../../services/membership.service";
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { MembershipApiService } from "../../../../services/api/membership-api.service";
import { AlertController } from '@ionic/angular';

type Stores = {id: number, name: string};
@Component({
  selector: 'app-tv-brand',
  templateUrl: './tv-brand.page.html',
  styleUrls: ['./tv-brand.page.scss'],
})
export class TvBrandPage implements OnInit {
  brand: string;
  jenis: string;
  data_brand:any = [];
  data_inch:any = [];
  data_jenis:any = [];
  inner_valueSelected:string;
  outer_valueSelected:string;
  condition_valueSelected:string;
  addition_valueSelected:string;
  lokasi_trade: string;
  stores: any = [];
  searchedStores: any = [];
  searchStore;
  inch: string;
  kondisi_tvSelected:string;
  kondisi_layarSelected:string;
  portSelected: string;
  wifiSelected:string;
  suaraSelected:string;

  constructor(
    private membershipApiService: MembershipApiService,
    private storage: Storage,
    private sellingApiService: SellingApiService,
    private helper: HelperService,
    private device: Device,
    public utilsService: UtilitiesService, 
    public navCtrl: NavController,
    private selling: MembershipService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
 
  ) {
    
   }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.getStore();
    this.getBrand();
    this.selling.removeSelling();
  }

  getStore(){
    this.storage.get(tokenKey).then((token) => {
      this.sellingApiService.getStore(token).subscribe(
        (response: any) => {
         this.stores = response.data.store;
        //  console.log(this.stores)
        },
        (err) => {
          this.stores = [];

          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  getBrand(){
    this.storage.get(tokenKey).then((token) => {
      this.sellingApiService.getBrand(token).subscribe(
        (response: any) => {
         this.data_brand = response.data.brand;
         this.data_inch = response.data.inch;
         this.data_jenis = response.data.jenis_tv;
         console.log(this.data_brand)
        },
        (err) => {
          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  submit() {
    if ((this.brand == null || this.jenis == null || this.lokasi_trade == null || this.inch == null || this.inner_valueSelected == null || this.outer_valueSelected == null || this.condition_valueSelected == null || this.addition_valueSelected == null ) || (this.brand.replace(/\s/g, "") == "")){
      this.utilsService.showToast("Lengkapi pengisian form.");
    } 
    else if((this.kondisi_tvSelected == "Mati")){
      alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");
    } 
    else {
      this.presentAlertConfirm();
    }
  } 

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'ZFix',
      message: 'Apakah data yang di pilih sudah sesuai dengan kondisi yang sebenarnya?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'yourClass',
          handler: () => {}
        }, {
          text: 'Lanjut',
          handler: () => {
            let navigationExtras: NavigationExtras = {
              queryParams: {
                  brand: this.brand,
                  jenis: this.jenis,
                  lokasi_trade: this.lokasi_trade,
                  inner_valueSelected: this.inner_valueSelected,
                  outer_valueSelected:this.outer_valueSelected,
                  condition_valueSelected:this.condition_valueSelected,
                  addition_valueSelected:this.addition_valueSelected,
                  port:this.portSelected,
                  wifi:this.wifiSelected,
                  suara:this.suaraSelected,
                  kondisi_tv:this.kondisi_tvSelected,
                  kondisi_layar:this.kondisi_layarSelected,
                  inch:this.inch
              }
            };
            this.navCtrl.navigateForward(["/landing/tv-brand/detail-tv"], navigationExtras);
              
          }
        }, 
      ]
    });
    await alert.present();
  }
 
  
}
