import { Component } from '@angular/core';

import { of, take, takeLast, distinct, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-demo.component.html',
  styleUrl: './rxjs-demo.component.css',
})
export class RxjsDemoComponent {
  data$ = of(10, 10, 20, 20, 30, 10, 40);

  takeExample() {
    this.data$.pipe(take(3)).subscribe((value) => {
      console.log('take:', value);
    });
  }

  takeLastExample() {
    this.data$.pipe(takeLast(3)).subscribe((value) => {
      console.log('takeLast:', value);
    });
  }

  distinctExample() {
    this.data$.pipe(distinct()).subscribe((value) => {
      console.log('distinct:', value);
    });
  }

  distinctChangedExample() {
    this.data$.pipe(distinctUntilChanged()).subscribe((value) => {
      console.log('distinctUntilChanged:', value);
    });
  }
}
