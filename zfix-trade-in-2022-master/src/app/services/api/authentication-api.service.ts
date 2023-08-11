import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiUrl } from "../../config/api";

@Injectable({
  providedIn: "root",
})
export class AuthenticationApiService {
  constructor(private http: HttpClient) {}

  login(user): Observable<Object> {
    return this.http.post(apiUrl + "login/customer", user);
  }

  register(user): Observable<Object> {
    return this.http.post(apiUrl + "register", user);
  }

  sendResetEmail(user): Observable<Object> {
    return this.http.post(apiUrl + "password/email", user);
  }
}
