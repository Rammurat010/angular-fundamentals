import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-product-catch-error',
  standalone: true,
  imports: [],
  templateUrl: './product-catch-error.component.html',
  styleUrl: './product-catch-error.component.css',
})
export class ProductCatchErrorComponent {
  products: any[] = [];

  errorMessage = '';

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http
      .get<any>('https://dummyjson.com/products')

      .pipe(
        catchError((error) => {
          console.log('API Error:', error);

          this.errorMessage = 'Products load nahi ho sake!';

          return of({
            products: [],
          });
        }),

        map((response) => response.products),
      )

      .subscribe({
        next: (data) => {
          this.products = data;
        },
      });
  }
}
