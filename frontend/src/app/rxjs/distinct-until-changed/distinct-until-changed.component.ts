import { Component } from '@angular/core';
import { distinctUntilChanged, of } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  standalone: true,
  imports: [],
  templateUrl: './distinct-until-changed.component.html',
  styleUrl: './distinct-until-changed.component.css',
})
export class DistinctUntilChangedComponent {
  data$ = of(3, 4, 4, 3, 4, 6, 7, 8, 7, 6, 5, 4);

  dataValue: number[] = [];

  constructor() {
    this.data$.pipe(distinctUntilChanged()).subscribe((data) => {
      console.log('Data:', data);

      this.dataValue.push(data);
    });
  }
}
