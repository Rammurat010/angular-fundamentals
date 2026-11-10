import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  async getProducts(): Promise<any> {
    const response = await fetch(this.apiUrl);
    return await response.json();
  }
}
