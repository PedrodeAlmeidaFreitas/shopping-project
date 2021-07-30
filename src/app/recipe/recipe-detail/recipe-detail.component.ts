import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  recipe: Recipe = {} as Recipe;

  constructor(private recipeService: RecipeService) {
    this.recipeService.selectedRecipe.subscribe(
      (selected: Recipe) => (this.recipe = selected)
    );
  }
}
