import { Component, OnDestroy } from '@angular/core';
import { map, range, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnDestroy {
  private subscription!: Subscription;

  mapData: number[] = [];

  ShowData(): void {
    this.mapData = [];

    this.subscription = range(1, 5)
      .pipe(
        map((value) => {
          return value * 10;
        }),
      )
      .subscribe((value) => {
        this.mapData.push(value);
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
