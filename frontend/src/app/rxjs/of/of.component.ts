import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  standalone: true,
  imports: [],
  templateUrl: './of.component.html',
  styleUrl: './of.component.css',
})
export class OfComponent {
  dataOf: number[] = [];

  $data = of(2, 3, 4, 5);

  constructor() {
    this.$data.subscribe((value) => {
      console.log(value);

      this.dataOf.push(value);
    });
  }
}
