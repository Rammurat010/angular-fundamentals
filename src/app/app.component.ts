import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductMapComponent } from './product-map/product-map.component';
import { ProductTapComponent } from './product-tap/product-tap.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductFinalizeComponent } from './product-finalize/product-finalize.component';
import { ProductCatchErrorComponent } from './product-catch-error/product-catch-error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductListComponent,
    ProductMapComponent,
    ProductTapComponent,
    ProductFilterComponent,
    ProductFinalizeComponent,
    ProductCatchErrorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rxjs-product-api';
}
