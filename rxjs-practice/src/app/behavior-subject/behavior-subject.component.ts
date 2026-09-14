import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  standalone: true,
  imports: [],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css',
})
export class BehaviorSubjectComponent {
  data$ = new BehaviorSubject<string>('Guest');

  subscribeData() {
    this.data$.subscribe((data) => {
      console.log('Data:', data);
    });
  }

  sendData() {
    this.data$.next('Ram');
  }

  sendData2() {
    this.data$.next('Murat');
  }

  getCurrentData() {
    console.log('Current Data:', this.data$.getValue());
  }
}
