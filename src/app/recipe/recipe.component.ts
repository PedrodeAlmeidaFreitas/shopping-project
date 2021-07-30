import { Component } from '@angular/core';
import { Recipe } from './model/recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  actualRecipe: Recipe = {} as Recipe;

  constructor(private recipeService: RecipeService) { }

  setRecipe(recipe: Recipe) {
    this.actualRecipe = recipe;
  }
}
