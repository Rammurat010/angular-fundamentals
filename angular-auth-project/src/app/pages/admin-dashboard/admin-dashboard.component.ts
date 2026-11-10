import { Component } from '@angular/core';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent {
  users: User[] = [];

  constructor(public authService: AuthService) {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.authService.getUsers();
  }

  deleteUser(email: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      const users = this.authService.getUsers();

      const updatedUsers = users.filter((user) => user.email !== email);

      localStorage.setItem('users', JSON.stringify(updatedUsers));

      this.loadUsers();
    }
  }
}
