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
  selector: 'app-detail-mesin-cuci',
  templateUrl: './detail-mesin-cuci.page.html',
  styleUrls: ['./detail-mesin-cuci.page.scss'],
})
export class DetailMesinCuciPage implements OnInit {
  
  response: any = {}
  brand: string;
  type: string;
  condition: string;
  kondisi_fisik: string;
  rubber: string;
  tutup: string;
  tombol: string;
  pembuangan: string;
  pengering: string;
  air_otomatis: string;
  pemanas: string;
  lokasi_trade: string;
  price: string;

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
      this.type = params["type"];
      this.condition = params["condition"];
      this.kondisi_fisik = params["kondisi_fisik"];
      this.rubber = params["rubber"];
      this.tutup = params["tutup"];
      this.tombol = params["tombol"];
      this.pembuangan = params["pembuangan"];
      this.pengering = params["pengering"];
      this.air_otomatis = params["air_otomatis"];
      this.pemanas = params["pemanas"];
      this.lokasi_trade = params["lokasi_trade"];

  });

  this.getData();
  }

  getData(){
    this.storage.get(tokenKey).then((token) => {
  
        let data = {
          brand: this.brand,
          type: this.type,
        }
        // console.log(deviceActivity)
        this.sellingApiService.getMesinCuciDetail(token, data).subscribe(
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
        type: this.type,
        condition: this.condition,
        kondisi_fisik:this.kondisi_fisik,
        rubber:this.rubber,
        tutup:this.tutup,
        tombol:this.tombol,
        pembuangan:this.pembuangan,
        pengering:this.pengering,
        air_otomatis:this.air_otomatis,
        pemanas:this.pemanas,
        lokasi_trade: this.lokasi_trade,
        price: this.price
      }
      this.sellingApiService.sellMesinCuci(token, data).subscribe(
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
