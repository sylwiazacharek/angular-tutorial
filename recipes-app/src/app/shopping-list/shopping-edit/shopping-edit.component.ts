import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
	@ViewChild('nameInput', { static: true }) nameInput: ElementRef;
	@ViewChild('amountInput', { static: true }) amountInput: ElementRef;

	public constructor(
		private _shoppingListService: ShoppingListService) { }

	public onAddIngredient(): void {
		const ingredientName: string = this.nameInput.nativeElement.value;
		const ingredientAmount: number = +this.amountInput.nativeElement.value;

		this._shoppingListService.addIngredient(
			new Ingredient(
				ingredientName,
				ingredientAmount
			)
		);
	}
}
