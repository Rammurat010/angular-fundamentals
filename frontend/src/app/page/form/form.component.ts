import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  name = '';
  email = '';
  phone = '';
  age = '';
  gender = '';
  course = '';
  city = '';

  html = false;
  css = false;
  javascript = false;
  angular = false;

  address = '';

  FormData(form: any): void {
    console.log('Complete Form:', form.value);

    console.log('Name:', form.value.name);
    console.log('Email:', form.value.email);
    console.log('Course:', form.value.course);
  }
}
