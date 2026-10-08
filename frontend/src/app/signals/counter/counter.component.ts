import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  count = signal(0);

  doubleCount = computed(() => {
    return this.count() * 2;
  });

  constructor() {
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }

  increase() {
    this.count.update((value) => value + 1);
  }

  decrease() {
    this.count.update((value) => value - 1);
  }
}
