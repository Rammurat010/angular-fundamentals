import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.css',
})
export class DebounceTimeComponent {
  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => {
        console.log('Search:', value);
      });
  }
}
