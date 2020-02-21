import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "Test recipe",
      "the desc",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEK3iHtgxszGgw4euKVT7xxqw71bTLSID9wnmii7SURY_N0p1&s"
    ),
    new Recipe(
      "Test recipe2",
      "the desc2",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEK3iHtgxszGgw4euKVT7xxqw71bTLSID9wnmii7SURY_N0p1&s"
    )
  ];
  constructor() {}

  getRecipes(){
    return this.recipes.slice();
  }
}
