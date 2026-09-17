import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css',
})
export class CartsComponent implements OnInit {
  carts: any[] = [];

  loading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCarts();
  }

  getCarts(): void {
    this.loading = true;
    this.apiService.getCarts().subscribe({
      next: (response) => {
        console.log(response);
        this.carts = response.carts;
        this.loading = false;
      },

      error: (error) => {
        console.log('API Error:', error);
        this.loading = false;
      },
    });
  }
}
