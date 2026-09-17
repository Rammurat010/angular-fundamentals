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
} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit, OnDestroy {
  // Products
  products: Product[] = [];

  // Loading
  loading = false;

  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalProducts = 0;
  totalPages = 0;

  // Page change trigger
  private pageSubject = new Subject<number>();

  // Destroy subscription
  private destroy$ = new Subject<void>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.pageSubject
      .pipe(
        //  Loading start
        tap(() => {
          this.loading = true;
        }),

        //  Page change hone par API call
        switchMap((page) => {
          // Skip calculate
          const skip = (page - 1) * this.pageSize;

          return this.apiService.getProducts(this.pageSize, skip).pipe(
            //  Response process
            map((response) => {
              // Total products
              this.totalProducts = response.total;

              // Total pages
              this.totalPages = Math.ceil(this.totalProducts / this.pageSize);

              // Products return
              return response.products;
            }),

            //  Error handling
            catchError((error) => {
              console.log('Products API Error:', error);

              this.products = [];

              return of([] as Product[]);
            }),

            //  Loading false
            finalize(() => {
              this.loading = false;
            }),
          );
        }),

        //  Component destroy
        takeUntil(this.destroy$),
      )

      //  Subscribe
      .subscribe({
        next: (products) => {
          this.products = products;
        },
      });

    // First page load
    this.pageSubject.next(1);
  }
  // Change Page
  changePage(page: number): void {
    // Invalid page
    if (page < 1 || page > this.totalPages) {
      return;
    }

    // Current page update
    this.currentPage = page;

    // API trigger
    this.pageSubject.next(page);
  }

  // Previous Page
  previousPage(): void {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }

  // Next Page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }

  // Destroy
  ngOnDestroy(): void {
    this.destroy$.next();

    this.destroy$.complete();
  }
}
