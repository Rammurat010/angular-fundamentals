import { Component } from '@angular/core';
import { mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  standalone: true,
  imports: [],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.css',
})
export class MergeMapComponent {
  ShowData() {
    const data$ = of('sohan', 'mohan', 'shohan');

    data$
      .pipe(
        mergeMap((value) => {
          return of(value + ' yadav');
        }),
      )
      .subscribe((value) => {
        console.log(value);
      });
  }
}
