import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user';
import { Subject, of } from 'rxjs';
import {
  switchMap,
  tap,
  map,
  catchError,
  finalize,
  takeUntil,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  searchText = '';
  private searchSubject = new Subject<string>();
  loading = false;
  currentPage = 1;
  pageSize = 10;
  totalUsers = 0;
  totalPages = 0;

  private pageSubject = new Subject<number>();
  private destroy$ = new Subject<void>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.currentPage = 1;
          this.loading = true;
        }),
        switchMap((search) => {
          return this.apiService.getUsers(100, 0).pipe(
            map((response) => {
              let data = response.users;
              const value = search.toLowerCase().trim();
              if (value !== '') {
                data = data.filter((user: User) => {
                  return (
                    user.firstName.toLowerCase().includes(value) ||
                    user.lastName.toLowerCase().includes(value) ||
                    user.email.toLowerCase().includes(value) ||
                    user.phone.toLowerCase().includes(value) ||
                    user.id.toString().includes(value)
                  );
                });
              }
              return data;
            }),
            catchError((error) => {
              console.log('Users Search API Error:', error);
              return of([] as User[]);
            }),
            finalize(() => {
              this.loading = false;
            }),
          );
        }),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (users) => {
          this.users = users;
          this.totalUsers = users.length;
          this.totalPages = Math.ceil(this.totalUsers / this.pageSize);
        },
      });
    this.pageSubject
      .pipe(
        tap(() => {
          this.loading = true;
        }),
        switchMap((page) => {
          const skip = (page - 1) * this.pageSize;
          return this.apiService.getUsers(this.pageSize, skip).pipe(
            map((response) => {
              this.totalUsers = response.total;
              this.totalPages = Math.ceil(this.totalUsers / this.pageSize);
              return response.users;
            }),
            catchError((error) => {
              console.log('Users API Error:', error);
              return of([] as User[]);
            }),
            finalize(() => {
              this.loading = false;
            }),
          );
        }),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (users) => {
          this.users = users;
        },
      });
    this.pageSubject.next(1);
  }
  searchUsers(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchText = input.value;
    this.searchSubject.next(this.searchText);
  }
  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.pageSubject.next(page);
  }
  previousPage(): void {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
