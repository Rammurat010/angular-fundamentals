import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit, OnDestroy {
  totalEmployees = 0;
  activeEmployees = 0;
  inactiveEmployees = 0;
  totalDepartments = 0;

  loading = false;
  errorMessage = '';

  private destroy$ = new Subject<void>();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {
    this.loading = true;
    this.errorMessage = '';

    this.employeeService
      .getEmployees()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          const employees = response.data || [];

          this.totalEmployees = employees.length;

          this.activeEmployees = employees.filter(
            (employee: any) => employee.status === 'Active',
          ).length;

          this.inactiveEmployees = employees.filter(
            (employee: any) => employee.status !== 'Active',
          ).length;

          const departments = new Set(
            employees.map((employee: any) => employee.department),
          );

          this.totalDepartments = departments.size;

          this.loading = false;
        },

        error: (error) => {
          console.error(error);

          this.loading = false;

          this.errorMessage =
            'Unable to load dashboard data. Please try again.';
        },
      });
  }

  retry(): void {
    this.loadDashboard();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
