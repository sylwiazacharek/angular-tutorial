import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header-bar',
	templateUrl: './header-bar.component.html',
	styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {
	public isCollapsed: boolean = true;

	@Output() pageChanged = new EventEmitter<string>();

	public constructor() { }

	public onSelect(page: string): void {
		this.pageChanged.emit(page);
	}
}
