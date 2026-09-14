import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs';

@Component({
  selector: 'app-product-finalize',
  standalone: true,
  imports: [],
  templateUrl: './product-finalize.component.html',
  styleUrl: './product-finalize.component.css',
})
export class ProductFinalizeComponent {
  products: any[] = [];

  loading = false;

  constructor(private http: HttpClient) {}

  getProducts() {
    this.loading = true;

    this.http
      .get<any>('https://dummyjson.com/products')
      .pipe(
        map((response) => response.products),
        finalize(() => {
          this.loading = false;
          console.log('API finished');
        }),
      )
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log('Products loaded');
        },
        error: (error) => {
          console.log('Error:', error);
        },
      });
  }
}
