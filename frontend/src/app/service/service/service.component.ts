import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent implements OnInit {
  data: string[] = [];
  dataList: number[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.data = this.productService.getProducts();
    this.dataList = this.productService.getList();
  }
}
