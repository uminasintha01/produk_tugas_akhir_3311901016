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

declare var cordova: any;
type Stores = {id: number, name: string};
@Component({
  selector: 'app-ps-brand',
  templateUrl: './ps-brand.page.html',
  styleUrls: ['./ps-brand.page.scss'],
})
export class PsBrandPage implements OnInit {
  storages: string;
  type: string;
  condition_valueSelected:string;
  addition_valueSelected:string;
  lokasi_trade: string;
  model:string;
  more_addition:string;
  kondisi_ps:string;
  body:string;
  console:string;
  port:string;
  add_games:string;
  jenis_ps:string;

  stores: any = [];
  searchedStores: any = [];
  data_brand:any = [];
  data_type:any = [];
  data_storages:any = [];
  data_jenis:any = [];

  searchStore;
  
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

  ) { }

  ngOnInit() {
    this.getStore();
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
         console.log(this.stores)
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
      this.sellingApiService.getBrandPS(token).subscribe(
        (response: any) => {
         this.data_brand = response.data.brand;
         this.data_type = response.data.type;
         this.data_storages = response.data.storages;
         this.data_jenis = response.data.jenis_ps;
         console.log(this.data_jenis)
        },
        (err) => {
          console.log(err)
          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  submit() {
    if ((this.storages == null || this.lokasi_trade == null  )  || (this.storages.replace(/\s/g, "") == "") ){
      this.utilsService.showToast("Lengkapi pengisian form.");
    } else if(this.kondisi_ps == "Mati Total"){
      alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");

    } else {
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
                  storages: this.storages,
                  type: this.type,
                  lokasi_tade: this.lokasi_trade,
                  condition_valueSelected:this.condition_valueSelected,
                  addition_valueSelected:this.addition_valueSelected,
                  kondisi_ps:this.kondisi_ps,
                  console:this.console,
                  port:this.port,
                  add_games:this.add_games,
                  jenis_ps:this.jenis_ps,
                }
            };
            this.navCtrl.navigateForward(["/landing/ps-brand/detail-unit-ps"], navigationExtras);
              
          }
        }, 
      ]
    });
    await alert.present();
  }
}
