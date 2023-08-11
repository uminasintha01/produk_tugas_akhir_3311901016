import { HttpHeaders } from "@angular/common/http";

export const apiUrl = "https://trade-in.zfix.id/api/";

export const tokenKey = "auth-token";

export const ActivationKey = "selling";

export function setToken(token) {
  return new HttpHeaders().append("Authorization", "Bearer " + token);
}
