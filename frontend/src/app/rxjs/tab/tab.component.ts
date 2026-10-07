import { Component } from '@angular/core';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
})
export class TabComponent {
  data$ = of(3, 4, 5, 6, 7, 76);

  constructor() {
    this.data$
      .pipe(
        tap((data) => {
          console.log('tap data:', data);
        }),
      )
      .subscribe((data) => {
        console.log('subscribe:', data);
      });
  }
}
