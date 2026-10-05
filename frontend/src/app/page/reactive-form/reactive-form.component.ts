import { Component } from '@angular/core';

import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),

    email: new FormControl('', [Validators.required, Validators.email]),

    age: new FormControl('', Validators.required),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),

    gender: new FormControl('Male'),

    city: new FormControl('', Validators.required),

    skills: new FormControl(''),

    date: new FormControl('', Validators.required),

    address: new FormControl('', Validators.required),

    terms: new FormControl(false, Validators.requiredTrue),
  });

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
