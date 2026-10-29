import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  searchText: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  // GET USERS
  getUsers(): void {
    this.userService.getUsers().subscribe({
      next: (response) => {
        console.log(response);

        this.users = response.users;
      },

      error: (error) => {
        console.log(error);
      },
    });
  }

  // DELETE USER
  deleteUser(id: number): void {
    if (!confirm('Are you sure you want to delete this user?')) {
      return;
    }

    this.userService.deleteUser(id).subscribe({
      next: (response) => {
        console.log(response);

        this.users = this.users.filter((user) => user.id !== id);

        alert('User deleted successfully');
      },

      error: (error) => {
        console.log(error);

        alert('Delete failed');
      },
    });
  }

  // SEARCH
  get filteredUsers(): User[] {
    if (!this.searchText.trim()) {
      return this.users;
    }

    const search = this.searchText.toLowerCase();

    return this.users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(search) ||
        user.lastName.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search),
    );
  }
}
