import { Component } from '@angular/core';

import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  standalone: true,
  imports: [],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.css',
})
export class SwitchMapComponent {
  ShowData() {
    const date$ = of('ram', 'murat', 'shayam');

    date$
      .pipe(
        switchMap((value) => {
          return of(value + ' yadav');
        }),
      )
      .subscribe((value) => {
        console.log(value);
      });
  }
}
