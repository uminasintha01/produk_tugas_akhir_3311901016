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
  selector: 'app-detail-unit-ps',
  templateUrl: './detail-unit-ps.page.html',
  styleUrls: ['./detail-unit-ps.page.scss'],
})
export class DetailUnitPsPage implements OnInit {
  response: any = {}
  storages: string;
  brand:string;
  price:string;
  type:string;
  more_addition:string;
  kondisi_ps:string;
  console:string;
  port:string;
  add_games:string;
  jenis_ps:string;
  condition_valueSelected:string;
  addition_valueSelected:string;
  lokasi_trade: string;

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
      this.storages = params["storages"];
      this.type = params["type"];
      this.condition_valueSelected = params["condition_valueSelected"];
      this.addition_valueSelected = params["addition_valueSelected"];
      this.lokasi_trade = params["lokasi_tade"];
      this.kondisi_ps = params["kondisi_ps"];
      this.console = params["console"];
      this.port = params["port"];
      this.add_games = params["add_games"];
      this.jenis_ps = params["jenis_ps"];
  });
  this.getData();
  }
  getData(){
    this.storage.get(tokenKey).then((token) => {

        let data = {
          jenis_ps: this.jenis_ps,
          storages: this.storages,
          type: this.type,
        }
        // console.log(deviceActivity)
        this.sellingApiService.getPsDetail(token, data).subscribe(
          (response) => {
            this.response = response,
            this.price = this.response.data
            console.log(this.price)
          }
        )
    });
  }
  submit(){
    this.storage.get(tokenKey).then((token) => {
      let data = {
        brand:this.brand,
        storages:this.storages,
        type:this.type,
        condition:this.condition_valueSelected,
        addition:this.addition_valueSelected,
        price: this.price,
        lokasi_trade: this.lokasi_trade,
        kondisi_ps: this.kondisi_ps,
        console:this.console,
        port:this.port,
        add_games:this.add_games,
        jenis_ps:this.jenis_ps
      }
      this.sellingApiService.sellPs(token, data).subscribe(
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
