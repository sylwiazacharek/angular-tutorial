import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header-bar',
	templateUrl: './header-bar.component.html',
	styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {
	public isCollapsed: boolean = true;

	public constructor() { }
}
