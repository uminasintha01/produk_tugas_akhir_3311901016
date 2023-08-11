import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SellingApiService } from './../../../../services/api/selling-api.service';
import { HelperService } from '../../../../services/helper.service';
import { Device } from "@ionic-native/device/ngx";
import { UtilitiesService } from '../../../../services/utilities.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { MembershipService } from "../../../../services/membership.service";
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";

declare var cordova: any;
type Stores = {id: number, name: string}; 
declare var require: any


@Component({
  selector: 'app-brand2',
  templateUrl: './brand2.page.html',
  styleUrls: ['./brand2.page.scss'],
})
export class Brand2Page implements OnInit {
  ram: string;
  storages: string;
  brand: string;
  lokasi_trade:string;
  stores: any = [];
  searchedStores: any = [];
  model: any = [];

  constructor(    
    private sellingApiService: SellingApiService,
    private helper: HelperService,
    private storage: Storage,
    private device: Device,
    public utilsService: UtilitiesService, 
    public navCtrl: NavController,
    private selling: MembershipService,
    private router: Router,
    private activatedRoute: ActivatedRoute

    ) { }

  ngOnInit() {
    this.getStore();
    this.getRam();
    this.getStorage();
    this.getBrands();
  }

  ionViewWillEnter() {
    this.getStore();
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

  getBrands(){


    var androidDevices = require('android-device-list');
    var brands = androidDevices.brandList();
    
    this.model = androidDevices.getDevicesByModel(this.device.model)[0];

    this.brand = this.model.name;
  }

  getRam() {
    var raw = cordova.plugins['extended-device-information'].memory;
    raw = raw.replace(",",".");

    if (raw <= 256) {
      this.ram = "256 MB";
    }
    else if (raw <= 512) {
      this.ram = "512 MB";
    }
    else if (raw <= 768) {
      this.ram = "768 MB";
    }
    else if (raw <= 1000) {
      this.ram = "1 GB";
    }
    else if (raw <= 1500) {
      this.ram = "1.5 GB";
    }
    else if (raw <= 2000) {
      this.ram = "2 GB";
    }
    else if (raw <= 3000) {
      this.ram = "3 GB";
    }
    else if (raw <= 4000) {
      this.ram = "4 GB";
    }
    else if (raw <= 6000) {
      this.ram = "6 GB";
    }
    else if (raw <= 8000) {
      this.ram = "8 GB";
    }
    else if (raw <= 10000) {
      this.ram = "10 GB";
    }
    else if (raw <= 12000) {
      this.ram = "12 GB";
    }
    else if (raw <= 14000) {
      this.ram = "14 GB";
    }
    else if (raw <= 16000) {
      this.ram = "16 GB";
    }
    else if (raw <= 18000) {
      this.ram = "18 GB";
    }
    else if (raw <= 20000) {
      this.ram = "20 GB";
    }
    // console.log(this.ram);
  }

  getStorage() {
    var raw = cordova.plugins['extended-device-information'].totalstorage;
    raw = raw.replace(",",".");
    
    if (raw <= 1000) {
      this.storages = "1 GB";
    }
    else if (raw <= 2000) {
      this.storages = "2 GB";
    }
    else if (raw <= 4000) {
      this.storages = "4 GB";
    }
    else if (raw <= 8000) {
      this.storages = "8 GB";
    }
    else if (raw <= 16000) {
      this.storages = "16 GB";
    }
    else if (raw <= 32000) {
      this.storages = "32 GB";
    }
    else if (raw <= 64000) {
      this.storages = "64 GB";
    }
    else if (raw <= 128000) {
      this.storages = "128 GB";
    }
    else if (raw <= 256000) {
      this.storages = "256 GB";
    }
    else if (raw <= 512000) {
      this.storages = "512 GB";
    }
    else if (raw <= 768000) {
      this.storages = "768 GB";
    }
    else if (raw <= 1000000) {
      this.storages = "1 TB";
    }
    else if (raw <= 1500000) {
      this.storages = "1.5 TB";
    }
    else if (raw <= 2000000) {
      this.storages = "2 TB";
    }
  }

  submit() {
    if ((this.brand == null || this.ram == null || this.storages == null )){
      this.utilsService.showToast("Lengkapi pengisian form.");
    } else {
    // let data = {
    //   brand: this.brand,
    //   ram: this.ram,
    //   storages: this.storages,
    // }
    // this.selling.SetSelling(data);
    // this.router.navigate([
    //   "landing/selling-phone/screen-testing",
    // ]);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          brand: this.brand,
          ram: this.ram,
          storages: this.storages,
          lokasi_trade: this.lokasi_trade,
      }
    };
    this.navCtrl.navigateForward(["/landing/selling-phone/screen-testing"], navigationExtras);
    }
  } 

}