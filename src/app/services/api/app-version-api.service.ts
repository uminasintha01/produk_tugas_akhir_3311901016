import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiUrl, setToken } from "../../config/api";

@Injectable({
  providedIn: 'root'
})
export class AppVersionApiService {

  constructor(private http: HttpClient) { }

  
  detail(token): Observable<Object> {
    return this.http.get(apiUrl + "app-version", {
      headers: setToken(token),
    });
  }
  
}
