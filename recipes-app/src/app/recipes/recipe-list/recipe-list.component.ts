import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	public recipes: Recipe[];

	public constructor(
		private _recipeService: RecipeService,
		private _router: Router,
		private _route: ActivatedRoute) { }

	public ngOnInit(): void {
		this.recipes = this._recipeService.getRecipes();
	}

	public onAddRecipe() {
		this._router.navigate(['add'], { relativeTo: this._route });
	}
}
