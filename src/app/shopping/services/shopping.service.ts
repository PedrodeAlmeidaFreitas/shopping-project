import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Eggs', 1),
    new Ingredient('Tomato', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
}
