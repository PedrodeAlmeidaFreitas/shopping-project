import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingComponent } from './shopping.component';



@NgModule({
  declarations: [
    ShoppingEditComponent,
    ShoppingComponent
  ],
  exports: [
    ShoppingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShoppingModule { }
