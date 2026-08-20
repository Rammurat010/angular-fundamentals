import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';
import { TextColorDirective } from '../text-color.directive';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective, TextColorDirective],
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css'],
})
export class AttributeDirectiveComponent {
  // Simple properties
  isActive = true;
  color = 'blue';
  fontSize = 18;
  highlightColor = 'yellow';
  textColor = 'red';
}
