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

  loadEmployee(id: number): void {
    this.employeeService.getEmployee(id).subscribe({
      next: (response) => {
        this.employee = response.data;
      },

      error: (error) => {
        console.log(error);

        alert('Employee not found');

        this.router.navigate(['/employees']);
      },
    });
  }

  submitForm(): void {
    if (this.isEditMode) {
      this.employeeService
        .updateEmployee(this.employeeId, this.employee)
        .subscribe({
          next: () => {
            alert('Employee updated successfully');

            this.router.navigate(['/employees']);
          },

          error: (error) => {
            console.log(error);

            alert('Failed to update employee');
          },
        });
    } else {
      this.employeeService.addEmployee(this.employee).subscribe({
        next: () => {
          alert('Employee added successfully');

          this.router.navigate(['/employees']);
        },

        error: (error) => {
          console.log(error);

          alert('Failed to add employee');
        },
      });
    }
  }
}
