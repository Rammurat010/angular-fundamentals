import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css',
})
export class ObservableComponent implements OnDestroy {
  list: number[] = [];
  $data = new Observable<number>((observable) => {
    observable.next(5);
    observable.next(3);
    observable.next(2);

    observable.complete();
  });
  subcription!: Subscription;

  constructor() {
    this.subcription = this.$data.subscribe({
      next: (value) => {
        console.log(value);
        this.list.push(value);
      },

      error: (error) => {
        console.log(error);
      },

      complete: () => {
        console.log('done');
      },
    });
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe;
    console.log('Unsubscribed');
  }
}
