import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css',
})
export class AttributeComponent {
  color = 'red';
}
