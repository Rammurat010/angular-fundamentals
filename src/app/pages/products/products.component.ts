import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  Subject,
  of,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
  takeUntil,
} from 'rxjs';

import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit, OnDestroy {
  private productService = inject(ProductService);

  private search$ = new Subject<string>();
  private destroy$ = new Subject<void>();

  products: Product[] = [];
  searchText = '';
  loading = false;
  error = '';

  ngOnInit(): void {
    this.loadProducts();

    this.search$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((query) => {
          this.loading = true;
          this.error = '';

          return this.productService.searchProducts(query).pipe(
            catchError(() => {
              this.error = 'Search karte samay error aaya.';
              return of([] as Product[]);
            }),
          );
        }),
        takeUntil(this.destroy$),
      )
      .subscribe((products) => {
        this.products = products;
        this.loading = false;
      });
  }

  loadProducts(): void {
    this.loading = true;
    this.error = '';

    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
      error: () => {
        this.error = 'Products load nahi hue.';
        this.loading = false;
      },
    });
  }

  onSearch(value: string): void {
    this.search$.next(value.trim());
  }

  deleteProduct(id: number): void {
    const confirmDelete = confirm(
      'Kya aap is product ko delete karna chahte hain?',
    );

    if (!confirmDelete) {
      return;
    }

    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter((p) => p.id !== id);
      },
      error: () => {
        this.error = 'Delete karte samay error aaya.';
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.search$.complete();
  }
}
