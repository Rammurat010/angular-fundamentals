import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent {
  // 1. Click
  message = '';

  showMessage() {
    this.message = 'Button Clicked!';
  }

  // 2. Input
  name = '';

  getName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }

  // 3. Change
  city = '';

  changeCity(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.city = select.value;
  }

  // 4. Keyup
  keyUpMessage = '';

  keyUp(event: KeyboardEvent) {
    this.keyUpMessage = 'Key Released: ' + event.key;
  }

  // 5. Keydown
  keyDownMessage = '';

  keyDown(event: KeyboardEvent) {
    this.keyDownMessage = 'Key Pressed: ' + event.key;
  }

  // 6. Mouseover
  mouseOverMessage = '';

  mouseOver() {
    this.mouseOverMessage = 'Mouse is over the box';
  }

  // 7. Mouseout
  mouseOutMessage = '';

  mouseOut() {
    this.mouseOutMessage = 'Mouse is outside the box';
  }

  // 8. Double Click
  doubleClickMessage = '';

  doubleClick() {
    this.doubleClickMessage = 'Double Click Done!';
  }

  // 9. Form Submit
  submitMessage = '';

  submitForm() {
    this.submitMessage = 'Form Submitted Successfully!';
  }

  // 10. Focus
  focusMessage = '';

  inputFocus() {
    this.focusMessage = 'Input is focused';
  }

  // 11. Blur
  blurMessage = '';

  inputBlur() {
    this.blurMessage = 'Input lost focus';
  }

  // 12. Checkbox
  isChecked = false;

  checkBoxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.isChecked = checkbox.checked;
  }
}
