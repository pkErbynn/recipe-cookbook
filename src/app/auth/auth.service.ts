import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

import { User } from "./user.model";
import { environment } from "src/environments/environment";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  // login occurs way earlier before user will even subscribe to get the current user @ anytime thus, not just a Subject
  // and requires init value
  user = new BehaviorSubject<User>(null);
  tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
          environment.firebaseAPIKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handlingError),
        tap((resData) => {
          // converts expiresIn from string to number
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  signIn(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          environment.firebaseAPIKey, //point to env not env.prod
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handlingError),
        tap((resData) => {
          // converts expiresIn from string to number
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  autoLogin() {
    // JsonPipe.parse deserializes string data into object
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {
      return;
    }

    // without the type no properties on userData
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    // token is a get property(read-only)
    // if valid then publicize for auto login
    if (loadedUser.token) {
      this.user.next(loadedUser);

      // calculatin' the remainin' time for the token to expire to auto logout to occur
      // ...future expire date - now
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(["/auth"]);
    localStorage.removeItem("userData");

    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(tokenExpirationDuration: number) {
    // stores the id of the timer to be destroyed
    this.tokenExpirationTimer = setTimeout(
      () => this.logout(),
      tokenExpirationDuration
    );
    console.log("expire-duration |", tokenExpirationDuration);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    // ms -> date ..... s -> ms ..... * 1000
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);

    // auto logout timer starts here, once new user is created
    this.autoLogout(expiresIn * 1000);

    // serializes and store object as string
    localStorage.setItem("userData", JSON.stringify(user));
  }

  private handlingError(errorRes: HttpErrorResponse) {
    let errorMessage = "An error has occurred!";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = "This email exists already";
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = "This email is not found";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "This password in not correct";
        break;
    }
    return throwError(errorMessage);
  }
}
