import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http.get<any>('https://dummyjson.com/products').subscribe({
      next: (response) => {
        console.log(response);

        this.products = response.products;
      },

      error: (error) => {
        console.log(error);
      },

      complete: () => {
        console.log('API completed');
      },
    });
  }
}
