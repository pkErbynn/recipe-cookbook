import { Component, EventEmitter, Output } from "@angular/core";
// import { EventEmitter } from 'protractor';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  collapsed = true;
}
