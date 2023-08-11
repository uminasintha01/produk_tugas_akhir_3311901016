import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiUrl, setToken } from "../../config/api";

@Injectable({
  providedIn: 'root'
})
export class MembershipApiService {
  myClaim(token: any) {
    throw new Error("Method not implemented.");
  }
  constructor(private http: HttpClient) {}

  check(token, data): Observable<Object> {
    return this.http.post(apiUrl + "membership/check", data, {
      headers: setToken(token),
    });
  }

  activation(token, data): Observable<Object> {
    return this.http.post(apiUrl + "membership/activation", data, {
      headers: setToken(token),
    });
  }

  requestForClaim(token, data): Observable<Object> {
    return this.http.post(apiUrl + "membership/request-for-claim", data, {
      headers: setToken(token),
    });
  }  

  myPlan(token): Observable<Object> {
    return this.http.get(apiUrl + "membership/my-plan", {
      headers: setToken(token),
    });
  }

  Claim(token): Observable<Object> {
    return this.http.get(apiUrl + "membership/my-claim", {
      headers: setToken(token),
    });
  }

  current(token): Observable<Object> {
    return this.http.get(apiUrl + "membership/current", {
      headers: setToken(token),
    });
  }

  getNotif(token): Observable<Object> {
    return this.http.get(apiUrl + "user/notification", {
      headers: setToken(token),
    });
  }

  getStore(token): Observable<Object> {
    return this.http.get(apiUrl + "membership/store", {
      headers: setToken(token),
    });
  }

}
