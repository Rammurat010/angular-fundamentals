import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  standalone: true,
  imports: [],
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.css',
})
export class ObservableDemoComponent implements OnDestroy {
  // export class ObservableDemoComponent {
  //   observable = new Observable((observe) => {
  //     observe.next('ram');
  //     observe.next('murat');
  //     observe.next('yadav');
  //   });

  //   constructor() {
  //     this.observable.subscribe((data) => {
  //       console.log(data);
  //     });
  //   }
  private subscription!: Subscription;

  observable = new Observable((observer) => {
    observer.next('ram');
    observer.next('murat');
    observer.next('yadav');

    observer.complete();
  });

  constructor() {
    this.subscription = this.observable.subscribe({
      next: (data) => {
        console.log('Next:', data);
      },

      error: (error) => {
        console.log('Error:', error);
      },

      complete: () => {
        console.log('Complete');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

    console.log('Unsubscribe');
  }
}
