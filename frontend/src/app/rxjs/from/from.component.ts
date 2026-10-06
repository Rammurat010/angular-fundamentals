import { Component, OnDestroy } from '@angular/core';
import { from, Subscription } from 'rxjs';

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [],
  templateUrl: './from.component.html',
  styleUrl: './from.component.css',
})
export class FromComponent implements OnDestroy {
  listData = from([3, 4, 5, 6, 3, 2, 4]);
  private subscription!: Subscription;
  listValue: number[] = [];
  constructor() {
    this.subscription = this.listData.subscribe({
      next: (data) => {
        console.log(data);
        this.listValue.push(data);
      },
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('unsubscribe');
  }
}
