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
  selector: 'app-laptop-brand',
  templateUrl: './laptop-brand.page.html',
  styleUrls: ['./laptop-brand.page.scss'],
})
export class LaptopBrandPage implements OnInit {
  brand: string;
  memory: string;
  storages: string; 
  inner_valueSelected:string;
  outer_valueSelected:string;
  condition_valueSelected:string;
  addition_valueSelected:string;
  lokasi_trade:string;
  jenis_storage:string;
  kondisi_laptop:string;
  jenis_layar:string;
  baterai:string;
  kondisi_layar:string;
  keyboard:string;
  trackpad:string;
  port:string;
  wifi:string;
  camera:string;
  speaker:string;
  processor:string;
  ukuran_laptop:string;
  os:string;
  more_addition:string;

  stores: any = [];
  searchedStores: any = [];
  data_brand:any = [];
  data_storage:any = [];
  data_memory:any = [];
  data_processor:any = [];
  data_jenis_storage:any = ['HDD/SATA', 'SSD'];
  data_storage_ssd:any = ['128GB', '256GB', '500GB', '512GB', '1TB']
  data_storage_hdd_sata:any = ['250GB', '500GB', '1TB']
  data_ukuran_laptop:any = ['10" - 12"inch', '13" - 15"inch']
  data_os:any = ['Windows', 'MacOs', 'Non Operating System']

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
    this.selling.removeSelling();
    this.getBrand();
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
      this.sellingApiService.getBrandLaptop(token).subscribe(
        (response: any) => {
         this.data_brand = response.data.brand;
         this.data_storage = response.data.storages;
         this.data_memory = response.data.memory;
         this.data_processor = response.data.processor;
        //  console.log(this.data_brand)
        },
        (err) => {
          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  submit() {
    if ((this.brand == null || this.memory == null || this.storages == null || this.lokasi_trade == null )){
      this.utilsService.showToast("Lengkapi pengisian form.");
    } else if(this.kondisi_laptop == "Mati Total"){
      alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");

    }else {
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
                  memory: this.memory,
                  storages: this.storages,
                  lokasi_trade: this.lokasi_trade,
                  inner_valueSelected: this.inner_valueSelected,
                  outer_valueSelected:this.outer_valueSelected,
                  condition_valueSelected:this.condition_valueSelected,
                  addition_valueSelected:this. addition_valueSelected,
                  jenis_storage:this.jenis_storage,
                  kondisi_laptop:this.kondisi_laptop,
                  jenis_layar:this.jenis_layar,
                  baterai:this.baterai,
                  kondisi_layar:this.kondisi_layar,
                  keyboard:this.keyboard,
                  trackpad:this.trackpad,
                  port:this.port,
                  wifi:this.wifi,
                  camera:this.camera,
                  speaker:this.speaker,
                  processor:this.processor,
                  ukuran_laptop:this.ukuran_laptop,
                  os:this.os,
                  more_addition:this.more_addition

              }
            };
            this.navCtrl.navigateForward(["/landing/laptop-brand/detail-unit"], navigationExtras);
          }
        }, 
      ]
    });
    await alert.present();
  }

}