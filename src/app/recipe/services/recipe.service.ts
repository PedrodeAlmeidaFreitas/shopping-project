import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Nome da Receita',
      'Descriçao da receita',
      'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    ),
    new Recipe(
      'Nome da Receita 2',
      'Descriçao da receita 2',
      'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    )
  ];
  selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
