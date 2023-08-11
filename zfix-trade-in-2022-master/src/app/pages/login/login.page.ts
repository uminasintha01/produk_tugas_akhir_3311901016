import { Component, OnInit } from "@angular/core";
import { AuthenticationApiService } from "../../services/api/authentication-api.service";
import { AuthenticationService } from "../../services/authentication.service";
import { UtilitiesService } from "../../services/utilities.service";


@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  credential: any = {};

  constructor(
    private authApiService: AuthenticationApiService,
    private authService: AuthenticationService,
    public utilsService: UtilitiesService
  ) {}

  ngOnInit() {}

  ionViewWillLeave() {
    this.credential = {};
  }



  login() {
    if ((this.credential.email == null || this.credential.password == null) || (this.credential.email.replace(/\s/g, "") == "" || this.credential.password.replace(/\s/g, "") == "")){
      this.utilsService.showToast("Lengkapi pengisian form.");
    } 
    else{
      this.utilsService.showToast("Tunggu sebentar.");
      this.authApiService.login(this.credential).subscribe(
        (response) => {
          var raw: any = response;
          this.authService.login(raw.data.access_token);
        },
        (err) => {
          var error: any = {}
          error = err.error
          this.utilsService.showToast(error.message);      
        }
      );
    }

  }

  hideKeyboard() {
    this.utilsService.hideKeyboard()
  }
}
