import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  public recipes: Recipe[] = [
    new Recipe('Nome da Receita', 'Descriçao da receita', 'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'),
    new Recipe('Nome da Receita', 'Descriçao da receita', 'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
