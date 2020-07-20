import { Component, OnInit } from "@angular/core";

import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    // autoLogin is being executed first ones the app starts/refreshes(cus root component runs first)
    this.authService.autoLogin();
  }
}
