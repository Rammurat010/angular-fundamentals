import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css',
})
export class ReplaySubjectComponent {
  data$ = new ReplaySubject<string>(2);

  sendData() {
    this.data$.next('Ram');
    this.data$.next('Shyam');
    this.data$.next('Mohan');
  }

  subscribeData() {
    this.data$.subscribe((data) => {
      console.log('Subscriber:', data);
    });
  }
}
