import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	public ingredients: Ingredient[];
	private _ingredientsChangedSubscription: Subscription;

	public constructor(
		private _shoppingListService: ShoppingListService) { }

	public ngOnInit(): void {
		this.ingredients = this._shoppingListService.getIngredients();
		this._ingredientsChangedSubscription = this._shoppingListService.ingredientsChanged
			.subscribe(
				(ingredients: Ingredient[]) => {
					this.ingredients = ingredients;
				}
			);
	}

	public ngOnDestroy(): void {
		this._ingredientsChangedSubscription.unsubscribe();
	}
}
