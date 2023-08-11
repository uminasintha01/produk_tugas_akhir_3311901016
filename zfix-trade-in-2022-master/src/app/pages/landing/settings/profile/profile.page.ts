import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../../../services/authentication.service";
import { Storage } from "@ionic/storage";
import { tokenKey } from "../../../../config/api";
import { UserApiService } from "../../../../services/api/user-api.service";
import { UtilitiesService } from "../../../../services/utilities.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any = {};
  credential: any = {};

  constructor(
    private authService: AuthenticationService,
    private storage: Storage,
    private userApiService: UserApiService,
    private router: Router,
    private alertCtrl: AlertController,
    public utilsService: UtilitiesService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  ionViewWillLeave() {
    this.credential = {};
  }

  getUser() {
    this.storage.get(tokenKey).then((token) => {
      this.userApiService.userDetail(token).subscribe(
        (response) => {
          this.user = response;
          console.log(this.user);
          // console.log("image slides", this.listImageSlides);
        },
        (err) => {
          this.user = [];
          this.utilsService.showToast("There is a problem.");
        }
      );
    });
  }

  submit() {
    if ((this.user.data?.user.name == null || this.user.data?.user.address == null || this.user.data?.user.contact == null ) || (this.user.data?.user.email.replace(/\s/g, "") == "" || this.user.data?.user.name.replace(/\s/g, "") == ""  || this.user.data?.user.contact.replace(/\s/g, "") == ""  || this.user.data?.user.address.replace(/\s/g, "") == "" )){
      this.utilsService.showToast("Lengkapi pengisian form.");
    } 
    else {
      this.credential.name = this.user.data?.user.name;
      this.credential.email = this.user.data?.user.email;
      this.credential.address = this.user.data?.user.address;
      this.credential.contact = this.user.data?.user.contact;
      console.log(this.credential)
      this.storage.get(tokenKey).then((token) => {
        this.userApiService.userEdit(token, this.credential).subscribe(
          (success) => {
            this.utilsService.showToast("Update profile berhasil.");
            this.router.navigate(["landing/type"]);
          },
          (err) => {
            var error: any = {}
            error = err.error
            this.utilsService.showToast(error.message);        
          }
        );
      });
    }    
  }

  hideKeyboard() {
    this.utilsService.hideKeyboard()
  }

}
