import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiUrl, setToken } from "../../config/api";

@Injectable({
  providedIn: "root",
})
export class UserApiService {
  constructor(private http: HttpClient) {}

  userDetail(token): Observable<Object> {
    return this.http.get(apiUrl + "user/detail", {
      headers: setToken(token),
    });
  }

  userEdit(token, data): Observable<Object> {
    return this.http.post(apiUrl + "user/edit", data, {
      headers: setToken(token)
    });
  }
}
