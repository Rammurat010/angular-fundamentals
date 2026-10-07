import { Component } from '@angular/core';
import { of, mergeMap } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  standalone: true,
  imports: [],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.css',
})
export class MergeMapComponent {
  dataValue: number[] = [];

  constructor() {
    of(1, 2, 3)
      .pipe(
        mergeMap((value) => {
          return of(value * 10);
        }),
      )
      .subscribe((data) => {
        console.log(data);

        this.dataValue.push(data);
      });
  }
}
