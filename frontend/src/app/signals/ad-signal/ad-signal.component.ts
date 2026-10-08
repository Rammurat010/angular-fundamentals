import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-ad-signal',
  standalone: true,
  imports: [],
  templateUrl: './ad-signal.component.html',
  styleUrl: './ad-signal.component.css',
})
export class AdSignalComponent {
  data1 = signal(3);
  data2 = signal(4);

  total = computed(() => {
    return this.data1() + this.data2();
  });
  data = computed(() => {
    return this.data1() * this.data2();
  });
  divide = computed(() => {
    return this.data1() / this.data2();
  });
}
