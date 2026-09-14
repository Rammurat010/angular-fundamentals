import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-product-tap',
  standalone: true,
  imports: [],
  templateUrl: './product-tap.component.html',
  styleUrl: './product-tap.component.css',
})
export class ProductTapComponent {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http
      .get<any>('https://dummyjson.com/products')

      .pipe(
        tap((response) => {
          console.log('API Response:', response);
        }),

        map((response) => response.products),

        tap((products) => {
          console.log('Products:', products);
        }),
      )

      .subscribe({
        next: (data) => {
          this.products = data;
        },

        error: (error) => {
          console.log('Error:', error);
        },

        complete: () => {
          console.log('API Completed');
        },
      });
  }
}
