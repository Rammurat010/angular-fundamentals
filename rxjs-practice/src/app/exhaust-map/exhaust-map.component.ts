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
  ShowData() {
    const data$ = of('sohan', 'mohan', 'shohan');

    data$
      .pipe(
        exhaustMap((value) => {
          return of(value + ' yadav');
        }),
      )
      .subscribe((value) => {
        console.log(value);
      });
  }
}
