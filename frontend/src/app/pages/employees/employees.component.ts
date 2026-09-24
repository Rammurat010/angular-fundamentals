import { Component, OnInit, OnDestroy } from '@angular/core';

import { RouterLink } from '@angular/router';

import { Subject, combineLatest } from 'rxjs';

import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  map,
  takeUntil,
} from 'rxjs/operators';

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  standalone: true,

  imports: [RouterLink],

  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent implements OnInit, OnDestroy {
  employees: any[] = [];

  filteredEmployees: any[] = [];

  paginatedEmployees: any[] = [];

  loading = false;

  // Search
  searchSubject = new Subject<string>();

  // Filter
  departmentSubject = new Subject<string>();
  statusSubject = new Subject<string>();

  // Pagination
  currentPage = 1;
  pageSize = 5;

  totalPages = 0;

  private destroy$ = new Subject<void>();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();

    this.setupRxJS();
  }

  // Get employees from API

  loadEmployees(): void {
    this.loading = true;

    this.employeeService
      .getEmployees()

      .pipe(takeUntil(this.destroy$))

      .subscribe({
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

  // RxJS Search + Filter + Pagination

  setupRxJS(): void {
    const search$ = this.searchSubject.pipe(
      startWith(''),

      debounceTime(500),

      distinctUntilChanged(),
    );

    const department$ = this.departmentSubject.pipe(
      startWith(''),

      distinctUntilChanged(),
    );

    const status$ = this.statusSubject.pipe(
      startWith(''),

      distinctUntilChanged(),
    );

    combineLatest([search$, department$, status$])
      .pipe(
        map(([search, department, status]) => {
          let result = [...this.employees];

          // Search

          if (search) {
            const searchText = search.toLowerCase();

            result = result.filter(
              (employee) =>
                employee.name.toLowerCase().includes(searchText) ||
                employee.email.toLowerCase().includes(searchText) ||
                employee.phone.includes(searchText),
            );
          }

          // Department Filter

          if (department) {
            result = result.filter(
              (employee) => employee.department === department,
            );
          }

          // Status Filter

          if (status) {
            result = result.filter((employee) => employee.status === status);
          }

          return result;
        }),

        takeUntil(this.destroy$),
      )

      .subscribe((result) => {
        this.filteredEmployees = result;

        this.currentPage = 1;

        this.updatePagination();
      });
  }

  // Search

  searchEmployee(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.searchSubject.next(input.value);
  }

  // Department

  filterDepartment(event: Event): void {
    const select = event.target as HTMLSelectElement;

    this.departmentSubject.next(select.value);
  }

  // Status

  filterStatus(event: Event): void {
    const select = event.target as HTMLSelectElement;

    this.statusSubject.next(select.value);
  }

  // Pagination

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredEmployees.length / this.pageSize);

    const startIndex = (this.currentPage - 1) * this.pageSize;

    const endIndex = startIndex + this.pageSize;

    this.paginatedEmployees = this.filteredEmployees.slice(
      startIndex,
      endIndex,
    );
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;

      this.updatePagination();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;

      this.updatePagination();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;

    this.updatePagination();
  }

  get pages(): number[] {
    const pages: number[] = [];

    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }

  // Delete

  deleteEmployee(id: number): void {
    const confirmDelete = confirm(
      'Are you sure you want to delete this employee?',
    );

    if (!confirmDelete) {
      return;
    }

    this.employeeService
      .deleteEmployee(id)

      .pipe(takeUntil(this.destroy$))

      .subscribe({
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

  ngOnDestroy(): void {
    this.destroy$.next();

    this.destroy$.complete();
  }
}
