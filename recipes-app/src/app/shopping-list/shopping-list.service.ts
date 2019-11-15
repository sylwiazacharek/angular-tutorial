import { Subject } from 'rxjs';
import { Ingredient } from '../shared/models/ingredient.model';

export class ShoppingListService {
	public ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();

	private _ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10)
	];

	public getIngredients(): Ingredient[] {
		return this._ingredients.slice();
	}

	public addIngredient(ingredient: Ingredient): void {
		this.uniqueAddIngredient(ingredient);
		this.ingredientsChanged.next(this.getIngredients());
	}

	public addIngredients(ingredients: Ingredient[]): void {
		for (let ingredient of ingredients) {
			this.uniqueAddIngredient(ingredient);
		}
		this.ingredientsChanged.next(this.getIngredients());
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