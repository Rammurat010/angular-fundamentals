import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

import { Product, ProductResponse } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  products: Product[] = [];

  constructor(private http: HttpClient) {}

  // READ ALL
  getProducts(): Observable<Product[]> {
    return this.http.get<ProductResponse>(this.apiUrl).pipe(
      map((response) => response.products),
      tap((products) => {
        this.products = products;
      }),
    );
  }

  // SEARCH
  searchProducts(query: string): Observable<Product[]> {
    if (!query.trim()) {
      return this.getProducts();
    }

    return this.http
      .get<ProductResponse>(
        `${this.apiUrl}/search?q=${encodeURIComponent(query)}`,
      )
      .pipe(map((response) => response.products));
  }

  // READ SINGLE
  getProductById(id: number): Observable<Product> {
    const existing = this.products.find((p) => p.id === id);

    if (existing) {
      return new Observable<Product>((subscriber) => {
        subscriber.next(existing);
        subscriber.complete();
      });
    }

    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  // CREATE
  addProduct(data: Omit<Product, 'id'>): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/add`, data).pipe(
      tap((product) => {
        this.products = [{ ...data, id: product.id }, ...this.products];
      }),
    );
  }

  // UPDATE
  updateProduct(id: number, data: Omit<Product, 'id'>): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, data).pipe(
      tap((updated) => {
        this.products = this.products.map((product) =>
          product.id === id ? { ...product, ...data, id } : product,
        );
      }),
    );
  }

  // DELETE
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.products = this.products.filter((product) => product.id !== id);
      }),
    );
  }
}
