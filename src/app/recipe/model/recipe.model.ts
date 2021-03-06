import { isEmptyExpression } from "@angular/compiler";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }

  isEmpty() {
    return this.name === '' && this.imagePath === '' && this.imagePath === '';
  }
}
