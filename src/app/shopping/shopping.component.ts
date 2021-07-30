import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {
  ingredients: Ingredient[] = [];

  constructor(private shoppingService: ShoppingService) {
    this.ingredients = this.shoppingService.getIngredients();
  }
}
