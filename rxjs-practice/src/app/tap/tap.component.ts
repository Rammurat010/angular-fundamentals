import { Component, OnDestroy } from '@angular/core';

import { of, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  standalone: true,
  imports: [],
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.css',
})
export class TapComponent implements OnDestroy {
  private subscription!: Subscription;

  data$ = of(2, 3, 4, 56, 7, 88, 6, 5);

  ovservalData: number[] = [];

  ShowData(): void {
    this.subscription = this.data$
      .pipe(
        tap((value) => {
          console.log('Tap:', value);

          this.ovservalData.push(value);
        }),
      )
      .subscribe((value) => {
        console.log('Subscribe:', value);
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    console.log('unsubscribe');
  }
}
