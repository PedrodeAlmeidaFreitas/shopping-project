import { Component, Input } from '@angular/core';
import { Recipe } from '../../model/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe = {} as Recipe;

  constructor(private recipeService: RecipeService) {}

  onSelected(): void {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
