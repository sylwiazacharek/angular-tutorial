import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {  
  ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.uniqueAddIngredient(ingredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]): void {
    for (let ingredient of ingredients) {
      this.uniqueAddIngredient(ingredient);
    }
    this.ingredientsChanged.emit(this.getIngredients());
  }

  private uniqueAddIngredient(ingredient: Ingredient): void {
    const exsistingIngredient = this.ingredients.find(x => x.name === ingredient.name);

    if (exsistingIngredient) {
      exsistingIngredient.amount += ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }
  }
}