import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {
	@HostBinding('class.open') isOpen: boolean = false;

	public constructor(
		private _elementReference: ElementRef) { }

	@HostListener('document:click', ['$event']) toggleOpen(event: Event) {
		this.isOpen = this._elementReference.nativeElement.contains(event.target)
			? !this.isOpen
			: false;
	}
}