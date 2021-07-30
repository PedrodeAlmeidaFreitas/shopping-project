import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
