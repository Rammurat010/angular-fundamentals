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

  getProducts(
    limit: number = 30,
    skip: number = 0,
  ): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(
      `${this.productUrl}?limit=${limit}&skip=${skip}`,
    );
  }

  getUsers(limit: number = 10, skip: number = 0): Observable<UserResponse> {
    return this.http.get<UserResponse>(
      `${this.userUrl}?limit=${limit}&skip=${skip}`,
    );
  }

  getCarts(limit: number = 10, skip: number = 0): Observable<CartResponse> {
    return this.http.get<CartResponse>(
      `${this.cartUrl}?limit=${limit}&skip=${skip}`,
    );
  }

  getPosts(limit: number = 10, skip: number = 0): Observable<PostResponse> {
    return this.http.get<PostResponse>(
      `${this.postUrl}?limit=${limit}&skip=${skip}`,
    );
  }
}
