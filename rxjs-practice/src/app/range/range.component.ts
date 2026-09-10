import { Component, OnDestroy, OnInit } from '@angular/core';
import { range, Subscription } from 'rxjs';

@Component({
  selector: 'app-range',
  standalone: true,
  imports: [],
  templateUrl: './range.component.html',
  styleUrl: './range.component.css',
})
export class RangeComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = range(1, 9).subscribe((value) => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

    console.log('unsubscribe');
  }
}
