import { Component } from '@angular/core';

@Component({
  selector: 'app-state',
  standalone: true,
  templateUrl: './state.component.html',
})
export class StateComponent {
  count = 0;

  increase() {
    this.count++;
  }
}
