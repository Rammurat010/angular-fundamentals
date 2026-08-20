import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css',
})
export class BindingComponent {
  name = 'Rammurat';

  age = 25;

  imageUrl =
    'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';

  isDisabled = true;

  textColor = 'blue';
}
