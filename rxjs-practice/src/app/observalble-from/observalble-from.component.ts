import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';

@Component({
  selector: 'app-observalble-from',
  standalone: true,
  imports: [],
  templateUrl: './observalble-from.component.html',
  styleUrl: './observalble-from.component.css',
})
export class ObservalbleFromComponent implements OnInit, OnDestroy {
  data = from([4, 5, 6, 7, 8]);
  showData: number[] = [];
  private subscription!: Subscription;
  ngOnInit(): void {
    this.data.subscribe({
      next: (value) => {
        console.log(value);
        this.showData.push(value);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('done');
      },
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('unsubscribe');
  }
}
