import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Storage } from "@ionic/storage";
import { tokenKey } from "../config/api";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  sendResetEmail(token: any, AuthenticationApiService: any) {
    throw new Error('Method not implemented.');
  }
  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage) {}

  login(token) {
    return this.storage.set(tokenKey, token).then((res) => {
      this.authenticationState.next(true);
    });
  }

  logout() {
    return this.storage.remove(tokenKey).then((res) => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkToken() {
    return this.storage.get(tokenKey).then((res) => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }
}
