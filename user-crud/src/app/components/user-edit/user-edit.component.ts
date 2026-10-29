import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent implements OnInit {
  id!: number;

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    gender: '',
    phone: '',
  };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.getUser();
  }

  // GET SINGLE USER
  getUser(): void {
    this.userService.getUser(this.id).subscribe({
      next: (response) => {
        console.log(response);

        this.user = response;
      },

      error: (error) => {
        console.log(error);
      },
    });
  }

  // UPDATE USER
  updateUser(): void {
    this.userService.updateUser(this.id, this.user).subscribe({
      next: (response) => {
        console.log('Updated User:', response);

        alert('User updated successfully');

        this.router.navigate(['/users']);
      },

      error: (error) => {
        console.log(error);

        alert('Update failed');
      },
    });
  }
}
