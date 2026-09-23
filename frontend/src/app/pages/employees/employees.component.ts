import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];
  loading = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.loading = true;

    this.employeeService.getEmployees().subscribe({
      next: (response) => {
        this.employees = response.data;

        this.loading = false;
      },

      error: (error) => {
        console.log(error);

        this.loading = false;
      },
    });
  }

  deleteEmployee(id: number): void {
    const confirmDelete = confirm(
      'Are you sure you want to delete this employee?',
    );

    if (!confirmDelete) {
      return;
    }

    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        alert('Employee deleted successfully');

        this.loadEmployees();
      },

      error: (error) => {
        console.log(error);

        alert('Failed to delete employee');
      },
    });
  }
}
