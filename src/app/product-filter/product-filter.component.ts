import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css',
})
export class ProductFilterComponent {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http
      .get<any>('https://dummyjson.com/products')

      .pipe(
        map((response) => response.products),

        map((products) =>
          products.filter((product: any) => product.price > 100),
        ),
      )

      .subscribe({
        next: (data) => {
          this.products = data;
        },

        error: (error) => {
          console.log(error);
        },

        complete: () => {
          console.log('API Completed');
        },
      });
  }
}
