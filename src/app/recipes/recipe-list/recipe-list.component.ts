import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
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

  ngOnInit() {}
}
