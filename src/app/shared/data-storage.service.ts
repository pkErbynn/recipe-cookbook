import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

// alternative way of adding this service to the app-module provided block
// available and accessible application-wide
@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        "https://my-recipe-book-ng-2230b.firebaseio.com/recipes.json",
        recipes
      )
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  fetchRecipes() {
    // gets subscribed value only when this code is executed....comes with no unsubscription

    // two subscriptions/observables used here, user, http-get
    // last result being returned in the observable chain

    // user token is being accessed from 'user' observable and used a parameter on the 'get' observable

    return this.http
      .get<Recipe[]>(
        "https://my-recipe-book-ng-2230b.firebaseio.com/recipes.json"
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
