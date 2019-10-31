import { Component, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipeItem.component.html',
  styleUrls: ['./recipeItem.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  onRecipeSelected(): void {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
