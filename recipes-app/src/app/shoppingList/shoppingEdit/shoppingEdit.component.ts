import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shoppingEdit.component.html',
  styleUrls: ['./shoppingEdit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  onAddIngredient(): void {
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmount = +this.amountInput.nativeElement.value;

    this.shoppingListService.addIngredient(
      new Ingredient(
        ingredientName, 
        ingredientAmount
      )
    );
  }
}
