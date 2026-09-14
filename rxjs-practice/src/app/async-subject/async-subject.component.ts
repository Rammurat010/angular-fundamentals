import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  standalone: true,
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.css',
})
export class AsyncSubjectComponent {
  data$ = new AsyncSubject<string>();

  sendData() {
    this.data$.next('Ram');
    this.data$.next('Shyam');
    this.data$.next('Mohan');
  }

  subscribeData() {
    this.data$.subscribe({
      next: (data) => {
        console.log('Data:', data);
      },

      complete: () => {
        console.log('Completed');
      },
    });
  }

  completeData() {
    this.data$.complete();
  }
}
