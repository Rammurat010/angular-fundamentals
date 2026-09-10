import { Component } from '@angular/core';
import { filter, range, Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  private subscription!: Subscription;

  filterData: number[] = [];

  ShowData(): void {
    this.filterData = [];

    this.subscription = range(1, 10)
      .pipe(filter((value) => value % 2 === 0))
      .subscribe((value) => {
        this.filterData.push(value);
      });
  }
}
