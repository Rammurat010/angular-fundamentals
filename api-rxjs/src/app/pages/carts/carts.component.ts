import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
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
  selector: 'app-carts',
  standalone: true,
  imports: [],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css',
})
export class CartsComponent implements OnInit, OnDestroy {
  carts: any[] = [];
  searchText = '';
  private searchSubject = new Subject<string>();
  loading = false;
  currentPage = 1;
  pageSize = 8;
  totalCarts = 0;
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
        }),
        switchMap((search) => {
          return this.apiService.getCarts(100, 0).pipe(
            map((response) => {
              let data = response.carts;
              if (search.trim() !== '') {
                const value = search.toLowerCase().trim();
                data = data.filter((cart: any) => {
                  return (
                    cart.id.toString().includes(value) ||
                    cart.userId.toString().includes(value)
                  );
                });
              }
              return data;
            }),
            catchError((error) => {
              console.log('Search API Error:', error);
              return of([]);
            }),
            finalize(() => {
              this.loading = false;
            }),
          );
        }),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (carts) => {
          this.carts = carts;
          this.totalCarts = carts.length;
          this.totalPages = Math.ceil(this.totalCarts / this.pageSize);
        },
      });
    this.pageSubject
      .pipe(
        tap(() => {
          this.loading = true;
        }),
        switchMap((page) => {
          const skip = (page - 1) * this.pageSize;
          return this.apiService.getCarts(this.pageSize, skip).pipe(
            map((response) => {
              this.totalCarts = response.total;
              this.totalPages = Math.ceil(this.totalCarts / this.pageSize);
              return response.carts;
            }),
            catchError((error) => {
              console.log('Carts API Error:', error);
              return of([]);
            }),
            finalize(() => {
              this.loading = false;
            }),
          );
        }),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (carts) => {
          this.carts = carts;
        },
      });
    this.pageSubject.next(1);
  }
  searchCarts(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchText = input.value;
    this.loading = true;
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
