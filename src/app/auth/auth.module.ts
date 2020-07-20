import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AuthComponent } from "./auth.component";
import { SharedModule } from "../shared/shared.module";

// this auth-module imports formsModule. therefore, no need to import formsModule in app-module
@NgModule({
  // only what's declared in a module is accessible
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: "", component: AuthComponent }]),
  ],
})
export class AuthModule {}
