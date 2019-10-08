import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {  
  @HostBinding('class.open') isOpen = false;  
  
  constructor(
    private elementReference: ElementRef
    ) {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elementReference.nativeElement.contains(event.target) 
      ? !this.isOpen 
      : false;
  }
}