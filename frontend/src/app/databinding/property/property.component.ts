import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css',
})
export class PropertyComponent {
  name = 'murat';

  imageUrl =
    'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';

  isDisable = false;

  data = {
    name: 'murat',
    age: 55,
  };
}
