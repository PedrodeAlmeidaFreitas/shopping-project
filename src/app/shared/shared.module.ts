import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

const sharedComponents = [HeaderComponent]

@NgModule({
  declarations: sharedComponents,
  exports: sharedComponents,
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
