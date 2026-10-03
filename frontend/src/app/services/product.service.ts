import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts() {
    return ['Laptop', 'Mobile', 'Keyboard'];
  }
  getList() {
    return [3, 4, 5, 6, 7, 8];
  }
}
