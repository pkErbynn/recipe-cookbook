import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

// no need to be imported in the provided block of app-module
@Injectable({
  providedIn: "root",
})
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredient);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
