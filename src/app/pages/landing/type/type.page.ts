import { Component, OnInit } from '@angular/core';
import { UserApiService } from "../../../services/api/user-api.service";
import { AuthenticationService } from "../../../services/authentication.service";
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../config/api";
import { Router } from '@angular/router';
import  { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/pages/landing/popover/popover.component';
import { SellingApiService } from '../../../services/api/selling-api.service';

declare var cordova: any;

@Component({
  selector: 'app-type',
  templateUrl: './type.page.html',
  styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {
 
  brand: any[] = [
    {
      'id': 1,
      'name': 'Handphone'
    },
    {
      'id': 2,
      'name': 'Television'
    },
    {
      'id': 3,
      'name': 'Laptop'
    },
    {
      'id': 4,
      'name': 'Play Station'
    },
    {
      'id': 5,
      'name': 'Kulkas'
    },
    {
      'id': 4,
      'name': 'Mesin Cuci'
    },
  ];
  count_notification: any;
  constructor(
    private authService: AuthenticationService,
    private storage: Storage,
    private userApiService: UserApiService,
    private router: Router,
    private faio:FingerprintAIO,
    public popoverController: PopoverController,
    private sellingApiService: SellingApiService,

  ) {
    
   }

  ngOnInit() {
    setInterval(() => { 
      this.Count();
    }, 3000);

  //   cordova.plugins.AppReview.requestReview().catch(function() {
  //     return cordova.plugins.AppReview.openStoreScreen();
  //  });
  }
 
  goTo(id){
     if (id == 1) {
       this.router.navigate(['landing', 'selling-phone']);
      // alert("on progress")
    } else if (id == 2) {
      this.router.navigate(['landing', 'tv-brand']);
    }else if (id == 3) {
      this.router.navigate(['landing', 'laptop-brand']);
    }else if (id == 4) {
      this.router.navigate(['landing', 'ps-brand']);
    }else if (id == 5) {
      this.router.navigate(['landing', 'kulkas-brand']);
    }else if (id == 6) {
      this.router.navigate(['landing', 'mesin-cuci-brand']);
    }
    
  }

  Count(){
    this.storage.get(tokenKey).then((token) => {
      this.sellingApiService.getNotification(token).subscribe(
        (response: any) => {
        this.count_notification = response.count;
        console.log(this.count_notification)
        },
        (err) => {
          // this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  async popclick(event){
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event
    });
    return await popover.present();
  }

  logout() {
    this.authService.logout();
  }

}
