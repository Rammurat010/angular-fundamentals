import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css',
})
export class IntervalComponent implements OnDestroy {
  private subscription!: Subscription;

  SetInterval() {
    const observable$ = interval(1000);

    this.subscription = observable$.subscribe((value) => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();

    console.log('unsubscribe');
  }
}
