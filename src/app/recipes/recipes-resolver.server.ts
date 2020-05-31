import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { DataStorageService } from "../shared/data-storage.service";

@Injectable({ providedIn: "root" })
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(dataStorageService: DataStorageService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recipe[] | import("rxjs").Observable<Recipe[]> | Promise<Recipe[]> {
    throw new Error("Method not implemented.");
  }
}
