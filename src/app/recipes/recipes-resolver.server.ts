import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Resolve } from "@angular/router";

@Injectable({ providedIn: "root" })
export class RecipeResolverService implements Resolve<Recipe[]> {
  resolve(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ): Recipe[] | import("rxjs").Observable<Recipe[]> | Promise<Recipe[]> {
    throw new Error("Method not implemented.");
  }
}
