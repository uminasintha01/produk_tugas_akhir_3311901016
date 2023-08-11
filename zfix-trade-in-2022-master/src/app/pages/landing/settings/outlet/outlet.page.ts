import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { SellingApiService } from './../../../../services/api/selling-api.service';
import { UtilitiesService } from '../../../../services/utilities.service';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.page.html',
  styleUrls: ['./outlet.page.scss'],
})
export class OutletPage implements OnInit {
  stores: any = [];

  constructor(
    private storage: Storage,
    private sellingApiService: SellingApiService,
    public utilsService: UtilitiesService, 
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getStore();
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

}
