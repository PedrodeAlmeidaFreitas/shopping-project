import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe.component';
import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent
  ],
  exports: [RecipeComponent],
  imports: [
    CommonModule
  ],
  providers: [RecipeService]
})
export class RecipeModule { }
