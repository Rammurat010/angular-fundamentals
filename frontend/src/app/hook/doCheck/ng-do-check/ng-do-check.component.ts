import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  standalone: true,
  imports: [],
  templateUrl: './ng-do-check.component.html',
  styleUrl: './ng-do-check.component.css',
})
export class NgDoCheckComponent implements DoCheck {
  count = 0;
  Increase(): void {
    this.count = this.count + 1;
  }
  ngDoCheck(): void {
    console.log('count increase.....');
  }
}
