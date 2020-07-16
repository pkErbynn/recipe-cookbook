import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "src/app/header/header.component";
import { BasicHighlightDirective } from "./basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from "./better-highlight/better-highlight.directive";
import { UnlessDirective } from "./unless/unless.directive";
import { AppRoutingModule } from "./app-routing.module";
import { AlertComponent } from "./shared/alert/alert.component";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core.module";
import { AuthModule } from "./auth/auth.module";
// nb: even on-used imports are all bundled together making it big

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ShoppingListModule,
    SharedModule,
    CoreModule,
    AuthModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent],
})
export class AppModule {}
