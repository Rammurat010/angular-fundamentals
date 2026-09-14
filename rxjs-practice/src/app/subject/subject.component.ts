import { Component } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css',
})
export class SubjectComponent {
  subject = new Subject<string>();

  subscription1!: Subscription;
  subscription2!: Subscription;

  subscribeData() {
    this.subscription1 = this.subject.subscribe({
      next: (data) => {
        console.log('Subscriber 1:', data);
      },

      error: (error) => {
        console.log('Subscriber 1 Error:', error);
      },

      complete: () => {
        console.log('Subscriber 1 Completed');
      },
    });

    this.subscription2 = this.subject.subscribe({
      next: (data) => {
        console.log('Subscriber 2:', data);
      },

      error: (error) => {
        console.log('Subscriber 2 Error:', error);
      },

      complete: () => {
        console.log('Subscriber 2 Completed');
      },
    });
  }

  // next()
  sendData() {
    this.subject.next('Hello Angular');
  }

  // Multiple next()
  sendMultipleData() {
    this.subject.next('Ram');
    this.subject.next('Shyam');
    this.subject.next('Mohan');
  }

  // error()
  sendError() {
    this.subject.error('Something went wrong!');
  }

  // complete()
  completeData() {
    this.subject.complete();
  }

  // unsubscribe()
  unsubscribeData() {
    this.subscription1.unsubscribe();

    console.log('Subscriber 1 Unsubscribed');
  }
}
