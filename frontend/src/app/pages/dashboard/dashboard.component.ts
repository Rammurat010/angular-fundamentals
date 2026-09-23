import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  totalEmployees = 0;
  activeEmployees = 0;
  inactiveEmployees = 0;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({
      next: (response) => {
        const employees = response.data;

        this.totalEmployees = employees.length;

        this.activeEmployees = employees.filter(
          (employee: any) => employee.status === 'Active',
        ).length;

        this.inactiveEmployees = employees.filter(
          (employee: any) => employee.status !== 'Active',
        ).length;
      },

      error: (error) => {
        console.log(error);
      },
    });
  }
}
