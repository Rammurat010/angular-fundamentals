import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css',
})
export class UserAddComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    gender: '',
    phone: '',
  };

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  addUser(): void {
    this.userService.addUser(this.user).subscribe({
      next: (response) => {
        console.log('Added User:', response);

        alert('User added successfully');

        this.router.navigate(['/users']);
      },

      error: (error) => {
        console.log(error);

        alert('User add failed');
      },
    });
  }
}
