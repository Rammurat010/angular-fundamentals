import { Component } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  standalone: true,
  imports: [],
  templateUrl: './catch-error.component.html',
  styleUrl: './catch-error.component.css',
})
export class CatchErrorComponent {
  dataValue: string[] = [];

  constructor() {
    throwError(() => new Error('Something went wrong!'))
      .pipe(
        catchError((error) => {
          console.log('Error:', error.message);

          return of('Error handled');
        }),
      )
      .subscribe((data) => {
        console.log('Output:', data);

        this.dataValue.push(data);
      });
  }
}
