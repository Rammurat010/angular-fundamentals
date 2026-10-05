import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  // GET ALL
  getProducts(limit: number, skip: number) {
    return this.http.get<any>(`${this.apiUrl}?limit=${limit}&skip=${skip}`);
  }

  // GET BY ID
  getProductById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // SEARCH
  searchProducts(search: string, limit: number, skip: number) {
    return this.http.get<any>(
      `${this.apiUrl}/search?q=${search}&limit=${limit}&skip=${skip}`,
    );
  }

  // POST
  addProduct(product: any) {
    return this.http.post<any>(`${this.apiUrl}/add`, product);
  }

  // PUT
  updateProduct(id: number, product: any) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, product);
  }

  // DELETE
  deleteProduct(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
