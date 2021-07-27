import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadedFeature = 'recipes';

  onNavigate(event: any) {
    this.loadedFeature = event;
  }

  whatFeatureToShow(route: string) {
    return this.loadedFeature === route;
  }
}
