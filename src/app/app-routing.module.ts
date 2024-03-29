import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },

  // lazy loading. load component on demand
  //...nb: server needs restart to ensure lazy loading effect
  // module's eager loading in app-module should be removed
  // routes of child should be empty since accessed at global level
  // don't bring the ".ts" in the end
  {
    path: "recipes",
    loadChildren: "./recipes/recipes.module#RecipesModule",
  },
  {
    path: "shopping-list",
    loadChildren: "./shopping-list/shopping-list.module#ShoppingListModule",
  },
  {
    path: "auth",
    loadChildren: "./auth/auth.module#AuthModule",
  },

  // nb: might need to restart server for lazy loadin' to take effect
];
export const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule], // exports the declared routes application-wide
})
export class AppRoutingModule {}
