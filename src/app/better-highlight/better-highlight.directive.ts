import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string;
  @Input() highlightedColor: string;
  @HostBinding("style.backgroundColor") backgroundColor: string;
  // constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "yellow"
    // );
  }

  @HostListener("mouseenter") onMouseOver(eventData: Event) {
    this.backgroundColor = this.highlightedColor;
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
  }

  @HostListener("mouseleave") onMouseLeave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = this.defaultColor;
  }
}
