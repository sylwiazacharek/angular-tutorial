import { Ingredient } from '../shared/models/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
	public ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

	private _ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10)
	];

	public getIngredients(): Ingredient[] {
		return this._ingredients.slice();
	}

	public addIngredient(ingredient: Ingredient): void {
		this.uniqueAddIngredient(ingredient);
		this.ingredientsChanged.emit(this.getIngredients());
	}

	public addIngredients(ingredients: Ingredient[]): void {
		for (let ingredient of ingredients) {
			this.uniqueAddIngredient(ingredient);
		}
		this.ingredientsChanged.emit(this.getIngredients());
	}

	private uniqueAddIngredient(ingredient: Ingredient): void {
		const exsistingIngredient = this._ingredients.find(x => x.name === ingredient.name);

		if (exsistingIngredient) {
			exsistingIngredient.amount += ingredient.amount;
		} else {
			this._ingredients.push(ingredient);
		}
	}
}