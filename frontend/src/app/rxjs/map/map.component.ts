import { Component } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  listData$ = of(4, 5, 6, 7, 4, 2, 4, 5, 4);
  listMap: number[] = [];
  constructor() {
    let mapData = this.listData$.pipe(map((value) => value * 2));
    mapData.subscribe((value) => {
      console.log(value);
      this.listMap.push(value);
    });
  }
}
