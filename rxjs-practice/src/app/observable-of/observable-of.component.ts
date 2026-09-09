import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-of',
  standalone: true,
  imports: [],
  templateUrl: './observable-of.component.html',
  styleUrl: './observable-of.component.css',
})
export class ObservableOfComponent implements OnInit, OnDestroy {
  data = of('mohan', 'sohan', 'jgmohan');
  private subscription!: Subscription;

  displayData: string[] = [];

  ngOnInit() {
    this.subscription = this.data.subscribe({
      next: (value) => {
        console.log(value);
        this.displayData.push(value);
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
