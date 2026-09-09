import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  standalone: true,
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css',
})
export class FromEventComponent implements OnInit {
  ngOnInit() {
    const button = document.getElementById('btn');

    if (button) {
      const clickObservable = fromEvent(button, 'click');

      clickObservable.subscribe(() => {
        console.log('Button Clicked');
      });
    }
  }
}
