import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private users: User[] = [
    { id: 1, name: 'ram', email: 'ram@example.com', role: 'Admin' },
    { id: 2, name: 'murat', email: 'murat@example.com', role: 'User' },
    { id: 3, name: 'sohan', email: 'sohan@example.com', role: 'Manager' },
    {
      id: 4,
      name: 'mohan',
      email: 'mohan@example.com',
      role: 'Developer',
    },
    {
      id: 5,
      name: 'rakesh',
      email: 'rakesh@example.com',
      role: 'Designer',
    },
  ];

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
}
