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
  selector: 'app-detail-kulkas',
  templateUrl: './detail-kulkas.page.html',
  styleUrls: ['./detail-kulkas.page.scss'],
})
export class DetailKulkasPage implements OnInit {

  response: any = {}
  brand: string;
  model: string;
  type: string;
  condition: string;
  kondisi_fisik: string;
  rubber: string;
  tutup_freezer: string;
  tray: string;
  ice_maker: string;
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
      this.model = params["model"];
      this.type = params["type"];
      this.condition = params["condition"];
      this.kondisi_fisik = params["kondisi_fisik"];
      this.rubber = params["rubber"];
      this.tutup_freezer = params["tutup_freezer"];
      this.tray = params["tray"];
      this.ice_maker = params["ice_maker"];
      this.lokasi_trade = params["lokasi_trade"];

  });

  this.getData();
  }

  getData(){
    this.storage.get(tokenKey).then((token) => {
  
        let data = {
          brand: this.brand,
          type: this.type,
          model: this.model,
        }
        // console.log(deviceActivity)
        this.sellingApiService.getKulkasDetail(token, data).subscribe(
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
        model: this.model,
        condition: this.condition,
        kondisi_fisik:this.kondisi_fisik,
        rubber:this.rubber,
        tutup_freezer:this.tutup_freezer,
        tray:this.tray,
        ice_maker:this.ice_maker,
        lokasi_trade: this.lokasi_trade,
        price: this.price
      }
      this.sellingApiService.sellKulkas(token, data).subscribe(
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
