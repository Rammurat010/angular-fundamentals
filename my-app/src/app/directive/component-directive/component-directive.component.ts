import { Component } from '@angular/core';

@Component({
  selector: 'app-component-directive',
  standalone: true,
  imports: [],
  templateUrl: './component-directive.component.html',
  styleUrl: './component-directive.component.css',
})
export class ComponentDirectiveComponent {
  name = 'Rammurat';

  message = 'This is a Component Directive';

  showMessage() {
    alert('Hello Rammurat!');
  }
}
