import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
	public index: number;
	public editMode: boolean = false;

  constructor(
		private _route: ActivatedRoute) { }

  public ngOnInit(): void {
		this._route.params
			.subscribe(
				(params: Params) => {
					this.index = +params['id'];
					this.editMode = params['id'] != null;
				}
			);
  }

}
