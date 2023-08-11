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
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  response: any = {}
  deviceObj = [];
  ram: string;
  storages: string;
  brand:string;
  price:string;
  location:string;
  screen_has_problem: boolean;
  wifi_has_problem: boolean;
  camera_has_problem: boolean;
  button_has_problem: boolean;
  fingerprint_has_problem: boolean;
  lokasi_trade:string;
  
  constructor(
    private selling: MembershipService,
    private router: Router,
    private storage: Storage,
    private sellingApiService: SellingApiService,
    private activatedRoute: ActivatedRoute,
    public utilsService: UtilitiesService
  ) { }

  ngOnInit() {
    this.getData();
  } 

  getData(){
    this.storage.get(tokenKey).then((token) => {
      this.storage.get(ActivationKey).then((data) => {
        let deviceActivity = {
          brand: data.brand,
          ram: data.ram,
          storages: data.storages,
          location: data.lokasi_trade,
          screen_has_problem: data.screenHasProblem,
          camera_has_problem: data.cameraHasProblem,
          wifi_has_problem: data.wifiHasProblem,
          fingerprint_has_problem: data.fingerprintHasProblem,
          button_has_problem: data.buttonHasProblem,
          lokasi_trade: data.lokasi_trade
        }
        // console.log(deviceActivity)
        this.sellingApiService.getDeviceDetail(token, deviceActivity).subscribe(
          (response) => {
            this.response = response,
            this.price = this.response.data
          }
        )
          this.deviceObj.push(data);
      });
    });
  }

  submit(){
    this.storage.get(tokenKey).then((token) => {
      this.storage.get(ActivationKey).then((data) => {
        let deviceActivity = {
          brand: data.brand,
          ram: data.ram,
          storages: data.storages,
          location: data.lokasi_trade,
          screen_has_problem: data.screenHasProblem,
          camera_has_problem: data.cameraHasProblem,
          wifi_has_problem: data.wifiHasProblem,
          finger: data.fingerprintHasProblem,
          vibration: data.vibrateHasProblem,
          button_has_problem: data.buttonHasProblem,
          lokasi_trade: data.lokasi_trade,
          price: this.price
        }
        this.sellingApiService.sellDevice(token, deviceActivity).subscribe(
          (success) => {
            this.utilsService.showToast("Permintaan berhasil di ajukan.");
            this.router.navigate(["landing/type"]);
          },
          (err) => {
            var error: any = {}
            error = err.error
            this.utilsService.showToast(error.message);        
          }
        )
      });
    });
  }
}
