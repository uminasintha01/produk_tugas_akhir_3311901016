import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { ActivationKey } from "../config/api";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private storage: Storage,
    private http: HttpClient) { }

  SetSelling(data) {
    this.storage.set( ActivationKey, data);
  }

  removeSelling() {
    this.storage.remove( ActivationKey);
  }

 
}
