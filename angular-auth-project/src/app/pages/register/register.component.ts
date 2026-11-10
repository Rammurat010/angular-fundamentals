import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  role: 'admin' | 'user' = 'user';

  message = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  register() {
    this.message = '';
    this.errorMessage = '';

    const result = this.authService.register(
      this.name,
      this.email,
      this.password,
      this.role,
    );

    if (!result) {
      this.errorMessage = 'Email already exists';

      return;
    }

    this.message = 'Registration successful';

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
}
