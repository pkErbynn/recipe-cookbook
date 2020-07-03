import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // no manuel subscription here, done auto...just transformation of observable result
    return this.authService.user.pipe(
      map((user) => {
        // !!user => convert valid user to true boolean, else false
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        // redirect if not auth
        return this.router.createUrlTree(["/auth"]);
      })
    );
  }
}
