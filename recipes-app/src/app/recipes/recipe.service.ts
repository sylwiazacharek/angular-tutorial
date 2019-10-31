import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe", 
      "This is simply a test", 
      "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg"),
    new Recipe(
      "A Test Recipe 2", 
      "This is simply a test 2", 
      "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg")
  ];

  public getRecipes() {
    return this.recipes.slice();
  }
}