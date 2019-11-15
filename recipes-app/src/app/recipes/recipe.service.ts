import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';

export class RecipeService {
	public recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

	private _recipes: Recipe[] = [
		new Recipe(
			'Schnitzel', 
			'A tasty schnitzel', 
			'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5-500x500.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)
			]),
		new Recipe(
			'Burger', 
			'A big, fat burger', 
			'https://amp.businessinsider.com/images/5c420211b492cb5cdb1d88d4-750-501.jpg',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1)
			])
	];

	public getRecipes(): Recipe[] {
		return this._recipes.slice();
	}

	public getRecipe(id: number): Recipe {
		return this._recipes[id];
	}
}