import { Component, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent implements OnDestroy {
  private subscription!: Subscription;

  count = 0;

  ShowData() {
    this.subscription = timer(3000, 1000).subscribe((value) => {
      this.count = value;

      console.log(value);
    });
  }

  StopTimer() {
    if (this.subscription) {
      this.subscription.unsubscribe();

      console.log('Timer Stopped');
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
