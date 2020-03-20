import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "A Super-tasty Pizza - just awesome",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg",
      [
        new Ingredient("Meat", 1),
        new Ingredient("French Fries", 20),
        new Ingredient("Source", 1)
      ]
    ),
    new Recipe(
      "Big Fat Burger",
      "What else you need to say ? :) ",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEK3iHtgxszGgw4euKVT7xxqw71bTLSID9wnmii7SURY_N0p1&s",
      [
        new Ingredient("Meat", 2),
        new Ingredient("Buns Bread", 2),
        new Ingredient("Sliced Vegetables", 10)
      ]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) {}

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
