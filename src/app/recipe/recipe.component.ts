import { Component } from '@angular/core';
import { Recipe } from './model/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  actualRecipe: Recipe = {} as Recipe;

  setRecipe(recipe: Recipe) {
    this.actualRecipe = recipe;
  }
}
