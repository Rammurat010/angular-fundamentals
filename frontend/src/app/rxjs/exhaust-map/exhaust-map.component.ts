import { Component } from '@angular/core';
import { exhaustMap, of } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  standalone: true,
  imports: [],
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.css',
})
export class ExhaustMapComponent {
  dataValue: number[] = [];

  constructor() {
    of(1, 2, 3)
      .pipe(
        exhaustMap((value) => {
          return of(value * 10);
        }),
      )
      .subscribe((data) => {
        console.log(data);
        this.dataValue.push(data);
      });
  }
}
