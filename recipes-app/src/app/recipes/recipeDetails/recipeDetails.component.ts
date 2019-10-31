import { Component, Input } from "@angular/core";

import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shoppingList/shoppingList.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipeDetails.component.html',
  styleUrls: ['./recipeDetails.component.css']
})
export class RecipeDetailsComponent {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  addToShoppingList(): void {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}