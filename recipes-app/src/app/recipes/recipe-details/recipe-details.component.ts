import { Component, Input } from "@angular/core";

import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
	selector: 'app-recipe-details',
	templateUrl: './recipe-details.component.html',
	styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
	@Input() recipe: Recipe;

	public constructor(
		private _shoppingListService: ShoppingListService) { }

	public addToShoppingList(): void {
		this._shoppingListService.addIngredients(this.recipe.ingredients);
	}
}