import { Component } from '@angular/core';
import { concatMap, of } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  standalone: true,
  imports: [],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.css',
})
export class ConcatMapComponent {
  dataValue: number[] = [];

  constructor() {
    of(1, 2, 3)
      .pipe(
        concatMap((value) => {
          return of(value * 10);
        }),
      )
      .subscribe((data) => {
        console.log(data);
        this.dataValue.push(data);
      });
  }
}
