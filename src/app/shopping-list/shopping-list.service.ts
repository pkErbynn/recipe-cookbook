import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoe", 32)
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }
}
