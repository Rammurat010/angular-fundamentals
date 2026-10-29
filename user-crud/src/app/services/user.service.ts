import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  // GET ALL USERS
  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // GET SINGLE USER
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // ADD USER
  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/add`, user);
  }

  // UPDATE USER
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  // DELETE USER
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/${id}`);
  }
}
