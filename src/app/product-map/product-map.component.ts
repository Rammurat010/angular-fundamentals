import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-map',
  standalone: true,
  imports: [],
  templateUrl: './product-map.component.html',
  styleUrl: './product-map.component.css',
})
export class ProductMapComponent {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http
      .get<any>('https://dummyjson.com/products')

      .pipe(map((response) => response.products))

      .subscribe({
        next: (data) => {
          this.products = data;
        },

        error: (error) => {
          console.log(error);
        },
      });
  }
}
