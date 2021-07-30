import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown.directive';

const sharedComponents = [HeaderComponent, DropdownDirective];

@NgModule({
  declarations: sharedComponents,
  exports: sharedComponents,
  imports: [CommonModule]
})
export class SharedModule {}
