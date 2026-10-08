import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  standalone: true,
  imports: [],
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css',
})
export class EffectComponent {
  data = signal(0);

  Increase(): void {
    this.data.set(this.data() + 1);
  }

  Decrese(): void {
    this.data.set(this.data() - 1);
  }

  constructor() {
    effect(() => {
      console.log(this.data());
    });
  }
}
