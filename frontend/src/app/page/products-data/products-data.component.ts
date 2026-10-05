import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-products-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './products-data.component.html',
  styleUrl: './products-data.component.css',
})
export class ProductsDataComponent implements OnInit {
  products: any[] = [];

  searchText: string = '';

  product = {
    title: '',
    price: 0,
    description: '',
  };

  isEditMode: boolean = false;

  editId: number = 0;

  currentPage: number = 1;

  pageSize: number = 10;

  totalProducts: number = 0;

  totalPages: number = 0;

  constructor(private productService: ProductDataService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  // GET
  getProducts(): void {
    const skip = (this.currentPage - 1) * this.pageSize;

    this.productService.getProducts(this.pageSize, skip).subscribe({
      next: (response) => {
        this.products = response.products;

        this.totalProducts = response.total;

        this.totalPages = Math.ceil(this.totalProducts / this.pageSize);
      },

      error: (error) => {
        console.log(error);
      },
    });
  }

  // SEARCH
  search(): void {
    this.currentPage = 1;

    this.loadSearchProducts();
  }

  loadSearchProducts(): void {
    if (this.searchText.trim() === '') {
      this.getProducts();

      return;
    }

    const skip = (this.currentPage - 1) * this.pageSize;

    this.productService
      .searchProducts(this.searchText, this.pageSize, skip)
      .subscribe({
        next: (response) => {
          this.products = response.products;

          this.totalProducts = response.total;

          this.totalPages = Math.ceil(this.totalProducts / this.pageSize);
        },

        error: (error) => {
          console.log(error);
        },
      });
  }

  // NEXT
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;

      if (this.searchText.trim() === '') {
        this.getProducts();
      } else {
        this.loadSearchProducts();
      }
    }
  }

  // PREVIOUS
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;

      if (this.searchText.trim() === '') {
        this.getProducts();
      } else {
        this.loadSearchProducts();
      }
    }
  }

  // GO TO PAGE
  goToPage(page: number): void {
    this.currentPage = page;

    if (this.searchText.trim() === '') {
      this.getProducts();
    } else {
      this.loadSearchProducts();
    }
  }

  // PAGE NUMBERS
  getPages(): number[] {
    const pages: number[] = [];

    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }

  // ADD
  addProduct(): void {
    this.productService.addProduct(this.product).subscribe({
      next: (response) => {
        console.log('Added:', response);

        alert('Product added successfully');

        this.products.unshift(response);

        this.clearForm();
      },

      error: (error) => {
        console.log(error);
      },
    });
  }

  // EDIT
  editProduct(product: any): void {
    this.isEditMode = true;

    this.editId = product.id;

    this.product = {
      title: product.title,

      price: product.price,

      description: product.description,
    };
  }

  // UPDATE
  updateProduct(): void {
    this.productService.updateProduct(this.editId, this.product).subscribe({
      next: (response) => {
        console.log('Updated:', response);

        alert('Product updated successfully');

        const index = this.products.findIndex((p) => p.id === this.editId);

        if (index !== -1) {
          this.products[index] = response;
        }

        this.clearForm();
      },

      error: (error) => {
        console.log(error);
      },
    });
  }

  // DELETE
  deleteProduct(id: number): void {
    const confirmDelete = confirm(
      'Are you sure you want to delete this product?',
    );

    if (!confirmDelete) {
      return;
    }

    this.productService.deleteProduct(id).subscribe({
      next: (response) => {
        console.log('Deleted:', response);

        alert('Product deleted successfully');

        this.products = this.products.filter((p) => p.id !== id);
      },

      error: (error) => {
        console.log(error);
      },
    });
  }

  // CLEAR
  clearForm(): void {
    this.product = {
      title: '',

      price: 0,

      description: '',
    };

    this.isEditMode = false;

    this.editId = 0;
  }
}
