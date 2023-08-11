import { Component, OnInit } from '@angular/core';
import { AuthenticationApiService } from '../../services/api/authentication-api.service';
import { AuthenticationService } from '../../services/authentication.service';
import { UtilitiesService } from '../../services/utilities.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  credential: any = {};

  constructor(private authApiService: AuthenticationApiService, 
    private authService: AuthenticationService, 
    public utilsService: UtilitiesService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.credential = {};
  }

  submit() {
    if ((this.credential.email == null) || (this.credential.email.replace(/\s/g, "") == "")){
      this.utilsService.showToast("Lengkapi pengisian form.");
    } 
    else{
      this.utilsService.showToast("Tunggu Sebentar.");
      this.authApiService.sendResetEmail(this.credential).subscribe(
        (response) => {
          this.router.navigate([
            "/login",
           ]);
        },
        (err) => {
          var error: any = {}
          error = err.error
          this.utilsService.showToast(error.message);      }
      );
    }
 
  }

  hideKeyboard() {
    this.utilsService.hideKeyboard()
  }
}
