import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent {
  count = signal(0);
  SetData(): void {
    this.count.set(10);
  }
  UpdateData(): void {
    this.count.update((data) => data + 1);
  }
}
