import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,

  imports: [FormsModule, RouterLink],

  templateUrl: './employee-form.component.html',

  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent implements OnInit {
  isEditMode = false;

  employeeId!: number;

  loading = false;

  errorMessage = '';

  successMessage = '';

  employee = {
    name: '',

    email: '',

    phone: '',

    department: '',

    salary: 0,

    joining_date: '',

    status: 'Active',
  };

  constructor(
    private employeeService: EmployeeService,

    private route: ActivatedRoute,

    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditMode = true;

      this.employeeId = Number(id);

      this.loadEmployee(this.employeeId);
    }
  }

  // Get employee for edit

  loadEmployee(id: number): void {
    this.loading = true;

    this.errorMessage = '';

    this.employeeService.getEmployee(id).subscribe({
      next: (response) => {
        this.employee = response.data;

        this.loading = false;
      },

      error: (error) => {
        console.error(error);

        this.loading = false;

        this.errorMessage = 'Unable to load employee details.';
      },
    });
  }

  // Submit

  submitForm(form: any): void {
    this.errorMessage = '';

    this.successMessage = '';

    // Angular validation

    if (form.invalid) {
      form.control.markAllAsTouched();

      this.errorMessage = 'Please fix the validation errors.';

      return;
    }

    // Extra validation

    if (this.employee.salary <= 0) {
      this.errorMessage = 'Salary must be greater than 0.';

      return;
    }

    this.loading = true;

    if (this.isEditMode) {
      this.updateEmployee();
    } else {
      this.addEmployee();
    }
  }

  // Add

  addEmployee(): void {
    this.employeeService.addEmployee(this.employee).subscribe({
      next: () => {
        this.loading = false;

        alert('Employee added successfully.');

        this.router.navigate(['/employees']);
      },

      error: (error) => {
        console.error(error);

        this.loading = false;

        this.errorMessage = this.getErrorMessage(error);
      },
    });
  }

  // Update

  updateEmployee(): void {
    this.employeeService
      .updateEmployee(this.employeeId, this.employee)
      .subscribe({
        next: () => {
          this.loading = false;

          alert('Employee updated successfully.');

          this.router.navigate(['/employees']);
        },

        error: (error) => {
          console.error(error);

          this.loading = false;

          this.errorMessage = this.getErrorMessage(error);
        },
      });
  }

  // Error message

  getErrorMessage(error: any): string {
    if (error.status === 0) {
      return 'Server is not running. Please check the backend.';
    }

    if (error.status === 400) {
      return error.error?.message || 'Invalid employee data.';
    }

    if (error.status === 404) {
      return 'Employee not found.';
    }

    if (error.status === 409) {
      return 'Email already exists.';
    }

    if (error.status >= 500) {
      return 'Server error. Please try again later.';
    }

    return 'Something went wrong. Please try again.';
  }
}
