import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
];
export const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule], // exports the declared routes application-wide
})
export class AppRoutingModule {}
