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
  ShowData() {
    const data$ = of('sohan', 'mohan', 'shohan');

    data$
      .pipe(
        concatMap((value) => {
          return of(value + ' yadav');
        }),
      )
      .subscribe((value) => {
        console.log(value);
      });
  }
}
