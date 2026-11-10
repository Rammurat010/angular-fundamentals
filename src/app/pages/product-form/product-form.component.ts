import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  private service = inject(ProductService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  product: Omit<Product, 'id'> = {
    title: '',
    price: 0,
    description: '',
    category: '',
  };

  productId: number | null = null;
  loading = false;
  error = '';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.productId = Number(id);
      this.loading = true;

      this.service.getProductById(this.productId).subscribe({
        next: (data) => {
          const { id: ignoredId, ...details } = data;
          this.product = details;
          this.loading = false;
        },
        error: () => {
          this.error = 'Product load nahi hua.';
          this.loading = false;
        },
      });
    }
  }

  saveProduct(): void {
    if (
      !this.product.title.trim() ||
      !this.product.category.trim() ||
      this.product.price <= 0
    ) {
      this.error = 'Valid title, category aur price enter karein.';
      return;
    }

    this.loading = true;
    this.error = '';

    const request$ =
      this.productId !== null
        ? this.service.updateProduct(this.productId, this.product)
        : this.service.addProduct(this.product);

    request$.subscribe({
      next: () => {
        this.router.navigate(['/products']);
      },
      error: () => {
        this.error = 'Product save nahi hua. Dobara try karein.';
        this.loading = false;
      },
    });
  }
}
