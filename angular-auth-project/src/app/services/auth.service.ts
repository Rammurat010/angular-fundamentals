import { Injectable } from '@angular/core';

export interface User {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    this.createDefaultAdmin();
  }

  private createDefaultAdmin() {
    const users = this.getUsers();

    const adminExists = users.some((user) => user.email === 'admin@gmail.com');

    if (!adminExists) {
      users.push({
        name: 'Admin',
        email: 'admin@gmail.com',
        password: 'admin123',
        role: 'admin',
      });

      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  getUsers(): User[] {
    const users = localStorage.getItem('users');

    return users ? JSON.parse(users) : [];
  }

  register(
    name: string,
    email: string,
    password: string,
    role: 'admin' | 'user',
  ): boolean {
    const users = this.getUsers();

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return false;
    }

    const newUser: User = {
      name,
      email,
      password,
      role,
    };

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    return true;
  }

  login(email: string, password: string): boolean {
    const users = this.getUsers();

    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      return false;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));

    return true;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem('currentUser');

    return user ? JSON.parse(user) : null;
  }

  getRole(): string | null {
    const user = this.getCurrentUser();

    return user ? user.role : null;
  }

  getName(): string | null {
    const user = this.getCurrentUser();

    return user ? user.name : null;
  }
}
