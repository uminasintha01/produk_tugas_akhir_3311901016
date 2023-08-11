import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { SellingApiService } from './../../../../services/api/selling-api.service';
import { UtilitiesService } from './../../../../services/utilities.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  selectedSlide: any;
  segment = 0;
  sliderOptions = {
    initialSlide: 0,
    slidePerView: 1,
    speed: 400
  }

  trLaptop: any = [];
  trPS: any = [];
  trTV: any = [];
  trKulkas: any = [];  
  trMesinCuci: any = [];    
  stores: any = [];
  vouchers: any = [];

  constructor(
    private storage: Storage,
    private sellingApiService: SellingApiService,
    public utilsService: UtilitiesService, 
  ) {
    
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getTransaction();
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
