import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product';
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
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  searchText = '';
  private searchSubject = new Subject<string>();
  loading = false;
  currentPage = 1;
  pageSize = 8;
  totalProducts = 0;
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
          return this.apiService.getProducts(100, 0).pipe(
            map((response) => {
              let data = response.products;
              const value = search.toLowerCase().trim();
              if (value !== '') {
                data = data.filter((product: Product) => {
                  return (
                    product.title.toLowerCase().includes(value) ||
                    product.category.toLowerCase().includes(value) ||
                    product.description.toLowerCase().includes(value) ||
                    product.id.toString().includes(value)
                  );
                });
              }
              return data;
            }),
            catchError((error) => {
              console.log('Products Search API Error:', error);
              return of([] as Product[]);
            }),
            finalize(() => {
              this.loading = false;
            }),
          );
        }),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (products) => {
          this.products = products;
          this.totalProducts = products.length;
          this.totalPages = Math.ceil(this.totalProducts / this.pageSize);
        },
      });
    this.pageSubject
      .pipe(
        tap(() => {
          this.loading = true;
        }),
        switchMap((page) => {
          const skip = (page - 1) * this.pageSize;
          return this.apiService.getProducts(this.pageSize, skip).pipe(
            map((response) => {
              this.totalProducts = response.total;
              this.totalPages = Math.ceil(this.totalProducts / this.pageSize);
              return response.products;
            }),
            catchError((error) => {
              console.log('Products API Error:', error);
              return of([] as Product[]);
            }),
            finalize(() => {
              this.loading = false;
            }),
          );
        }),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (products) => {
          this.products = products;
        },
      });
    this.pageSubject.next(1);
  }
  searchProducts(event: Event): void {
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
