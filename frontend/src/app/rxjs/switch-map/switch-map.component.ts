import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.css',
})
export class SwitchMapComponent {
  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),

        distinctUntilChanged(),

        switchMap((search) => {
          return fetch(
            `https://dummyjson.com/products/search?q=${search}`,
          ).then((res) => res.json());
        }),
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
