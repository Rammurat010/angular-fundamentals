import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Subject, forkJoin, of } from 'rxjs';
import { tap, catchError, finalize, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit, OnDestroy {
  productCount = 0;
  userCount = 0;
  cartCount = 0;
  postCount = 0;

  loading = true;
  private destroy$ = new Subject<void>();
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loading = true;
    forkJoin({
      products: this.apiService.getProducts(),
      users: this.apiService.getUsers(),
      carts: this.apiService.getCarts(),
      posts: this.apiService.getPosts(),
    })
      .pipe(
        tap((response) => {
          console.log('Dashboard API Response:', response);
        }),
        catchError((error) => {
          console.log('Dashboard API Error:', error);
          return of(null);
        }),
        finalize(() => {
          this.loading = false;
        }),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (response) => {
          if (!response) {
            return;
          }
          this.productCount = response.products.total;
          this.userCount = response.users.total;
          this.cartCount = response.carts.total;
          this.postCount = response.posts.total;
        },
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
