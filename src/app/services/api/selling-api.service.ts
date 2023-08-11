import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiUrl, setToken } from "../../config/api";

@Injectable({
  providedIn: 'root'
})
export class SellingApiService {

  constructor(private http: HttpClient) { }

  deviceDetail(): Observable<any>{
    return this.http.get(apiUrl + 'device');
  }

  getDeviceDetail(token, data ): Observable<any>{
   
    return this.http.post(apiUrl + 'device/detail', data, {
      headers: setToken(token),
    });
  }
  sellDevice(token, data): Observable<Object> {
    return this.http.post(apiUrl + "device/selling-phone", data, {
      headers: setToken(token),
    });
  }
  sellLaptop(token, data): Observable<Object> {
    return this.http.post(apiUrl + "device/selling-laptop", data, {
      headers: setToken(token),
    });
  }
  getLaptopDetail(token, data ): Observable<any>{
   
    return this.http.post(apiUrl + 'device/detail-laptop', data, {
      headers: setToken(token),
    });
  }
  sellPs(token, data): Observable<Object> {
    return this.http.post(apiUrl + "device/selling-ps", data, {
      headers: setToken(token),
    });
  }
  getPsDetail(token, data ): Observable<any>{
   
    return this.http.post(apiUrl + 'device/detail-ps', data, {
      headers: setToken(token),
    });
  }
  sellTv(token, data): Observable<Object> {
    return this.http.post(apiUrl + "device/selling-tv", data, {
      headers: setToken(token),
    });
  }
  getTvDetail(token, data ): Observable<any>{
   
    return this.http.post(apiUrl + 'device/detail-tv', data, {
      headers: setToken(token),
    });
  }

  getStore(token): Observable<Object> {
    return this.http.get(apiUrl + "device/store", {
      headers: setToken(token),
    });
  }

  getBrand(token): Observable<Object> {
    return this.http.get(apiUrl + "device/brands", {
      headers: setToken(token),
    });
  }

  getBrandPS(token): Observable<Object> {
    return this.http.get(apiUrl + "device/brands-ps", {
      headers: setToken(token),
    });
  }

  getBrandLaptop(token): Observable<Object> {
    return this.http.get(apiUrl + "device/brands-laptop", {
      headers: setToken(token),
    });
  }

  getBrandKulkas(token): Observable<Object> {
    return this.http.get(apiUrl + "device/brands-kulkas", {
      headers: setToken(token),
    });
  }

  getKulkasDetail(token, data ): Observable<any>{
    return this.http.post(apiUrl + 'device/detail-kulkas', data, {
      headers: setToken(token),
    });
  }

  sellMesinCuci(token, data): Observable<Object> {
    return this.http.post(apiUrl + "device/selling-mesin-cuci", data, {
      headers: setToken(token),
    });
  }

  getBrandMesinCuci(token): Observable<Object> {
    return this.http.get(apiUrl + "device/brands-mesin-cuci", {
      headers: setToken(token),
    });
  }

  getMesinCuciDetail(token, data ): Observable<any>{
    return this.http.post(apiUrl + 'device/detail-mesin-cuci', data, {
      headers: setToken(token),
    });
  }

  sellKulkas(token, data): Observable<Object> {
    return this.http.post(apiUrl + "device/selling-kulkas", data, {
      headers: setToken(token),
    });
  }

  getQR(token): Observable<Object> {
    return this.http.get(apiUrl + "device/qrCode", {
      headers: setToken(token),
    });
  }

  getDetailTransaction(token): Observable<Object> {
    return this.http.get(apiUrl + "device/transaction", {
      headers: setToken(token),
    });
  }

  getNotification(token): Observable<Object> {
    return this.http.get(apiUrl + "device/notification", {
      headers: setToken(token),
    });
  }

  readNotification(token): Observable<Object> {
    return this.http.get(apiUrl + "device/read-notification", {
      headers: setToken(token),
    });
  }

}
