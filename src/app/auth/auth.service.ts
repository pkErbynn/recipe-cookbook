import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface AuthResponseDate {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseDate>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyByz_AJ3oY5p33oBnekS_UFMQZNGidTRzs",
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
