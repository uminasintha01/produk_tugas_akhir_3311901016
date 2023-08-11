import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SellingApiService } from '../../../services/api/selling-api.service';
import { tokenKey } from "../../../config/api";
import { Storage } from "@ionic/storage";
import { UtilitiesService } from '../../../services/utilities.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  notification: any = [];

  list: any = [
    "tes1",
    "tes2"
  ];

  constructor(
    public popoverController: PopoverController,
    private sellingApiService: SellingApiService,
    private storage: Storage,
    public utilsService: UtilitiesService, 
  ) { }

  ngOnInit() {
    this.getNotif();
  }

  getNotif(){
    this.storage.get(tokenKey).then((token) => {
      this.sellingApiService.getNotification(token).subscribe(
        (response: any) => {
        this.notification = response.data;
        console.log(this.notification)
        },
        (err) => {
          this.utilsService.showToast("There is a problem.");
        }
      );
    });

    this.storage.get(tokenKey).then((token) => {
      this.sellingApiService.readNotification(token).subscribe(
        (success) => {
        
        },
        (err) => {
          this.utilsService.showToast("There is a problem.");
        }
      );
    });

  }

}
