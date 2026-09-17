import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductResponse } from '../models/product';
import { UserResponse } from '../models/user';
import { CartResponse } from '../models/cart';
import { PostResponse } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private productUrl = 'https://dummyjson.com/products';
  private userUrl = 'https://dummyjson.com/users';
  private cartUrl = 'https://dummyjson.com/carts';
  private postUrl = 'https://dummyjson.com/posts';

  constructor(private http: HttpClient) {}

  // Products
  getProducts(
    limit: number = 30,
    skip: number = 0,
  ): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(
      `${this.productUrl}?limit=${limit}&skip=${skip}`,
    );
  }

  // Users
  getUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.userUrl);
  }

  // Carts
  getCarts(): Observable<CartResponse> {
    return this.http.get<CartResponse>(this.cartUrl);
  }

  // Posts
  getPosts(): Observable<PostResponse> {
    return this.http.get<PostResponse>(this.postUrl);
  }
}
