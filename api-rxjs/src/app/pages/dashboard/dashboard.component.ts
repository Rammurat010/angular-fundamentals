import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  productCount = 0;
  userCount = 0;
  cartCount = 0;
  postCount = 0;

  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Products
    this.apiService.getProducts().subscribe({
      next: (response) => {
        this.productCount = response.total;
      },

      error: (error) => {
        console.log('Products API Error:', error);
      },
    });

    // Users
    this.apiService.getUsers().subscribe({
      next: (response) => {
        this.userCount = response.total;
      },

      error: (error) => {
        console.log('Users API Error:', error);
      },
    });

    // Carts
    this.apiService.getCarts().subscribe({
      next: (response) => {
        this.cartCount = response.total;
      },

      error: (error) => {
        console.log('Carts API Error:', error);
      },
    });

    // Posts
    this.apiService.getPosts().subscribe({
      next: (response) => {
        this.postCount = response.total;

        this.loading = false;
      },

      error: (error) => {
        console.log('Posts API Error:', error);

        this.loading = false;
      },
    });
  }
}
