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
  selector: 'app-detail-unit',
  templateUrl: './detail-unit.page.html',
  styleUrls: ['./detail-unit.page.scss'],
})
export class DetailUnitPage implements OnInit {
  response: any = {}
  memory: string;
  storages: string;
  brand:string;
  price:string;
  inner_valueSelected:string;
  outer_valueSelected:string;
  condition_valueSelected:string;
  addition_valueSelected:string;
  lokasi_trade: string;
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
      this.memory = params["memory"];
      this.storages = params["storages"];
      this.inner_valueSelected = params["inner_valueSelected"];
      this.outer_valueSelected = params["outer_valueSelected"];
      this.condition_valueSelected = params["condition_valueSelected"];
      this.addition_valueSelected = params["addition_valueSelected"];
      this.lokasi_trade = params["lokasi_trade"];
      this.jenis_storage = params["jenis_storage"]; 
      this.kondisi_laptop = params["kondisi_laptop"]; 
      this.jenis_layar = params["jenis_layar"]; 
      this.baterai = params["baterai"]; 
      this.kondisi_layar = params["kondisi_layar"]; 
      this.keyboard = params["keyboard"]; 
      this.trackpad = params["trackpad"]; 
      this.port = params["port"]; 
      this.wifi = params["wifi"]; 
      this.camera = params["camera"]; 
      this.speaker = params["speaker"]; 
      this.processor = params["processor"]; 
      this.ukuran_laptop = params["ukuran_laptop"]; 
      this.os = params["os"]; 
      this.more_addition = params["more_addition"]; 


  });

  this.getData();
  }
  getData(){
    this.storage.get(tokenKey).then((token) => {

        let data = {
          brand: this.brand,
          memory: this.memory,
          storages: this.storages,
          processor:this.processor,
          jenis_storage:this.jenis_storage,
          ukuran_laptop:this.ukuran_laptop,
          os:this.os,

        }
        // console.log(deviceActivity)
        this.sellingApiService.getLaptopDetail(token, data).subscribe(
          (response) => {
            this.response = response,
            this.price = this.response.data
          }
        )
    });
  }
  submit(){
    this.storage.get(tokenKey).then((token) => {
    let data = {
      brand:this.brand,
      memory:this.memory,
      storages:this.storages,
      inner_screen:this.inner_valueSelected,
      outer_screen:this.outer_valueSelected,
      condition:this.condition_valueSelected,
      addition:this.addition_valueSelected,
      price: this.price,
      lokasi_trade: this.lokasi_trade,
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
    this.sellingApiService.sellLaptop(token, data).subscribe(
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
