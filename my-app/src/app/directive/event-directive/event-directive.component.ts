import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-directive.component.html',
  styleUrls: ['./event-directive.component.css'],
})
export class EventDirectiveComponent {
  // Variables
  count = 0;
  msg = 'Hello';
  color = 'black';
  text = '';
  show = true;

  // Methods
  handleClick() {
    this.count++;
    this.msg = `Clicked ${this.count} times!`;
  }

  handleDoubleClick() {
    this.msg = 'Double Clicked! 🎉';
  }

  handleMouseEnter() {
    this.color = 'red';
    this.msg = 'Mouse Enter!';
  }

  handleMouseLeave() {
    this.color = 'black';
    this.msg = 'Mouse Leave!';
  }

  handleKeyUp(event: any) {
    this.text = event.target.value;
    this.msg = `Typing: ${this.text}`;
  }

  handleEnterKey() {
    this.msg = 'Enter Key Pressed! ✅';
  }

  handleFocus() {
    this.msg = 'Input Focused!';
  }

  handleBlur() {
    this.msg = 'Input Blurred!';
  }

  handleChange(event: any) {
    this.msg = `Selected: ${event.target.value}`;
  }

  toggleVisibility() {
    this.show = !this.show;
    this.msg = this.show ? 'Visible!' : 'Hidden!';
  }
}
