import { Component } from '@angular/core';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  standalone: true,
  imports: [],
  templateUrl: './fork-join.component.html',
  styleUrl: './fork-join.component.css',
})
export class ForkJoinComponent {
  dataValue: number[] = [];

  constructor() {
    const first$ = of(10);
    const second$ = of(20);
    const third$ = of(30);

    forkJoin([first$, second$, third$]).subscribe((data) => {
      console.log(data);

      this.dataValue = data;
    });
  }
}
