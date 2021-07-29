import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {
  ingredients: Ingredient[] = [new Ingredient('Eggs', 3), new Ingredient('Milk', 6)];

}
