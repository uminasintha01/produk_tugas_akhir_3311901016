import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { MembershipService } from "../../../../services/membership.service";
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { MembershipApiService } from "../../../../services/api/membership-api.service";
import { ActivationKey } from "../../../../config/api";
import { SellingApiService } from './../../../../services/api/selling-api.service';
import { UtilitiesService } from "../../../../services/utilities.service";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
declare var cordova: any;

@Component({
  selector: 'app-detail-tv',
  templateUrl: './detail-tv.page.html',
  styleUrls: ['./detail-tv.page.scss'],
})
export class DetailTvPage implements OnInit {
  response: any = {}
  data_brand: any = {}
  data_jenis: any = {}
  brand:string;
  jenis:string;
  price:string;
  inch:string;
  inner_valueSelected:string;
  outer_valueSelected:string;
  condition_valueSelected:string;
  addition_valueSelected:string;
  lokasi_trade: string;
  jenis_tv: string;
  port:string;
  suara:string;
  wifi:string;
  kondisi_tv:string;
  kondisi_layar:string;

  constructor(
    private selling: MembershipService,
    private router: Router,
    private storage: Storage,
    private sellingApiService: SellingApiService,
    private activatedRoute: ActivatedRoute,
    public utilsService: UtilitiesService,
    private localNotifications: LocalNotifications

  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.brand = params["brand"];
      this.jenis = params["jenis"];
      this.inner_valueSelected = params["inner_valueSelected"];
      this.outer_valueSelected = params["outer_valueSelected"];
      this.condition_valueSelected = params["condition_valueSelected"];
      this.addition_valueSelected = params["addition_valueSelected"];
      this.lokasi_trade = params["lokasi_trade"];
      this.inch = params["inch"];
      this.port = params["port"];
      this.wifi = params["wifi"];
      this.suara = params["suara"];
      this.kondisi_tv = params["kondisi_tv"];
      this.kondisi_layar = params["kondisi_layar"];

  });

  this.getData();
}

getData(){
  this.storage.get(tokenKey).then((token) => {

      let data = {
        brand: this.brand,
        jenis_tv: this.jenis,
        inch: this.inch,
        inner_screen: this.inner_valueSelected,
        outer_screen: this.outer_valueSelected,
        condition: this.condition_valueSelected,
        addition: this.addition_valueSelected,
      }
      // console.log(deviceActivity)
      this.sellingApiService.getTvDetail(token, data).subscribe(
        (response) => {
          this.response = response,
          this.price = this.response.data
        }
      )
  });
}
  submit(){
   this.storage.get(tokenKey).then((token) => {
     let data ={
       brand: this.brand,
       jenis_tv:this.jenis,
       inner_screen:this.inner_valueSelected,
       outer_screen:this.outer_valueSelected,
       condition:this.condition_valueSelected,
       addition:this.addition_valueSelected,
       price:this.price,
       lokasi_trade: this.lokasi_trade,
       inch: this.inch,
       suara: this.suara,
       port: this.port,
       wifi: this.wifi,
       kondisi_layar: this.kondisi_layar,
       kondisi_tv: this.kondisi_tv
     }
     this.sellingApiService.sellTv(token, data).subscribe(
      (success) => {
        this.storage.get('Reviews').then((result) => { 
          if(result){
            this.utilsService.showToast("Permintaan berhasil di ajukan.");
            this.router.navigate(["landing/type"]);
          } else {
            this.utilsService.showToast("Permintaan berhasil di ajukan.");
            this.router.navigate(["landing/type"]);
            this.storage.set('Reviews', true);
                cordova.plugins.AppReview.requestReview().catch(function() {
                return cordova.plugins.AppReview.openStoreScreen();
            });
          }
        });
      },
      (err) => {
        var error: any = {}
        error = err.error
        this.utilsService.showToast(error.message);        
      }
    )
   });

   this.localNotifications.schedule({
    id: 1,
    text: 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih',
    data: { secret: 'secret' }
  });
  
  }
}
