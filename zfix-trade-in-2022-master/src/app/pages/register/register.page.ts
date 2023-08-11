import { Component, OnInit } from '@angular/core';
import { AuthenticationApiService } from '../../services/api/authentication-api.service';
import { AuthenticationService } from '../../services/authentication.service';
import { UtilitiesService } from '../../services/utilities.service';
import { Md5 } from 'ts-md5/dist/md5';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [Md5]
})
export class RegisterPage implements OnInit {

  credential: any = {}

  constructor(private authApiService: AuthenticationApiService, private authService: AuthenticationService, public utilsService: UtilitiesService, private _md5: Md5, public oneSignal: OneSignal,) 
  { 
    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     return result;
  }
    this.credential.external_user_id = makeid(5);
    // console.log(this.credential.external_user_id)

  }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.credential = {}
  }

  register() {
    if ((this.credential.email == null || this.credential.name == null || this.credential.contact == null || this.credential.address == null || this.credential.password == null || this.credential.confirm_password == null) || (this.credential.email.replace(/\s/g, "") == "" || this.credential.name.replace(/\s/g, "") == ""  || this.credential.contact.replace(/\s/g, "") == ""  || this.credential.address.replace(/\s/g, "") == ""  || this.credential.password.replace(/\s/g, "") == ""  || this.credential.confirm_password.replace(/\s/g, "") == "" )){
      this.utilsService.showToast("Lengkapi pengisian form.");
    } 
    else {
      this.utilsService.showToast('Tunggu Sebentar.');      
      this.authApiService.register(this.credential).subscribe(response => {
        var raw: any = response;
        this.authService.login(raw.data.access_token);
      }, (err) => {
        var error: any = {}
        var errors: any = []
        error = err.error.message;
        errors = err.error.messages?.confirm_password[0];
        
        
        if(errors) {
          this.utilsService.showToast(errors);
          return
        }
        if(error) {
          this.utilsService.showToast(error);
          return
        }
       
      });
      this.oneSignal.setExternalUserId(this.credential.external_user_id)
    }
  }

  hideKeyboard() {
    this.utilsService.hideKeyboard()
  }
}
