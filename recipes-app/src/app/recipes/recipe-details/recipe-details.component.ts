import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-details',
	templateUrl: './recipe-details.component.html',
	styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
	public recipe: Recipe;

	public constructor(
		private _recipeService: RecipeService,
		private _shoppingListService: ShoppingListService,
		private _route: ActivatedRoute) { }

		public ngOnInit(): void {
			this._route.params.subscribe(
				(params: Params) => {
					this.recipe = this._recipeService.getRecipe(+params['id']);
				}
			);
		}

	public addToShoppingList(): void {
		this._shoppingListService.addIngredients(this.recipe.ingredients);
	}
}