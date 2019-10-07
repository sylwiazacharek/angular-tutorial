import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(
    private elementReference: ElementRef
    ) {}

  ngOnInit() {
    this.elementReference.nativeElement.style.backgroundColor = 'green';
  }
}