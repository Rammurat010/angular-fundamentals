import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  product: any = { id: 0, title: '', price: 0, description: '' };
  isEdit: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  // READ
  async loadProducts() {
    try {
      const data = await this.productService.getProducts();
      this.products = data.products;
    } catch (error) {
      console.error('Error loading products', error);
    }
  }

  // CREATE
  addProduct() {
    this.product.id = Date.now();
    this.products.unshift(this.product);
    this.product = { id: 0, title: '', price: 0, description: '' };
    alert('Product Added Successfully!');
  }

  // UPDATE
  editProduct(p: any) {
    this.product = { ...p };
    this.isEdit = true;
  }

  updateProduct() {
    const index = this.products.findIndex((p) => p.id === this.product.id);
    if (index !== -1) {
      this.products[index] = { ...this.product };
      alert('Product Updated Successfully!');
    }
    this.cancelEdit();
  }

  // DELETE
  deleteProduct(id: number) {
    if (confirm('Are you sure?')) {
      this.products = this.products.filter((p) => p.id !== id);
      alert('Product Deleted Successfully!');
    }
  }

  cancelEdit() {
    this.isEdit = false;
    this.product = { id: 0, title: '', price: 0, description: '' };
  }
}
