import { HttpHeaders } from "@angular/common/http";

export const apiUrl = "http://192.168.43.210:8000/api/";

export const tokenKey = "auth-token";

export const ActivationKey = "selling";

export function setToken(token) {
  return new HttpHeaders().append("Authorization", "Bearer " + token);
}
