import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../config/api";
import { SellingApiService } from './../../../services/api/selling-api.service';
import { UtilitiesService } from './../../../services/utilities.service';

@Component({
  selector: 'app-my-qr',
  templateUrl: './my-qr.page.html',
  styleUrls: ['./my-qr.page.scss'],
})
export class MyQrPage implements OnInit {
  selectedSlide: any;
  segment = 0;
  sliderOptions = {
    initialSlide: 0,
    slidePerView: 1,
    speed: 400
  }

  qrLaptop: any = [];
  qrPS: any = [];
  qrTV: any = [];
  qrKulkas: any = [];
  qrMesinCuci: any = [];

  trLaptop: any = [];
  trPS: any = [];
  trTV: any = [];
  trKulkas: any = [];  
  trMesinCuci: any = [];    
  stores: any = [];
  vouchers: any = [];



  encoded = '1';

  constructor(
    private storage: Storage,
    private sellingApiService: SellingApiService,
    public utilsService: UtilitiesService, 

    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
  setInterval(() => { 
    this.getQRCODE();
  }, 2000);
  this.getTransaction();
  }

  getQRCODE(){
    this.storage.get(tokenKey).then((token) => {
      this.sellingApiService.getQR(token).subscribe(
        (response: any) => {
         this.qrLaptop = response.data.arr;
         this.qrTV = response.data.arr2;
         this.qrPS = response.data.arr3;
         this.qrKulkas = response.data.arr5;
         this.qrMesinCuci = response.data.arr6;
         this.stores = response.data.store;
         this.vouchers = response.data.voucher;
         console.log(response.data.arr2)
        },
        (err) => {
          // this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  getTransaction(){
    this.storage.get(tokenKey).then((token) => {
      this.sellingApiService.getDetailTransaction(token).subscribe(
        (response: any) => {
         this.trLaptop = response.data.data_arr;
         this.trTV = response.data.data_arr2;
         this.trPS = response.data.data_arr3;
         this.trKulkas = response.data.data_arr5;
         this.trMesinCuci = response.data.data_arr6;

        },
        (err) => {
          // this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  async segmentChanged(ev){
    await this.selectedSlide.slideTo(this.segment)
  }

  async slideShanged(slides : IonSlides){

    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex =>{
      this.segment = selectedIndex;
    })
  }

}
