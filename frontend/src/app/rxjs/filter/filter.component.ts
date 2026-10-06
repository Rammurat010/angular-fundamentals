import { Component } from '@angular/core';
import { filter, of } from 'rxjs';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  listData = of(3, 4, 5, 6, 7, 3, 4, 5);
  listappFilter: number[] = [];
  constructor() {
    let filterData = this.listData.pipe(filter((data) => data > 5));
    filterData.subscribe((data) => {
      console.log(data);
      this.listappFilter.push(data);
    });
  }
}
