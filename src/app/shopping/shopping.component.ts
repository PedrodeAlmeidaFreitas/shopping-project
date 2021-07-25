import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('Eggs', 3), new Ingredient('Milk', 6)];

  constructor() { }

  ngOnInit(): void {
  }

}
