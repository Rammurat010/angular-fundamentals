import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-twoway',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './twoway.component.html',
})
export class TwowayComponent {
  count: number = 0;
  statusMessage: string = '';
  userMessage: string = '';

  increment() {
    this.count++;
    this.showStatus('Increased!');
  }

  decrement() {
    this.count--;
    this.showStatus('Decreased!');
  }

  reset() {
    this.count = 0;
    this.showStatus('Reset!');
  }

  showStatus(msg: string) {
    this.statusMessage = msg;
    setTimeout(() => (this.statusMessage = ''), 2000);
  }
}
