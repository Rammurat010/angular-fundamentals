import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatchErrorComponent } from './product-catch-error.component';

describe('ProductCatchErrorComponent', () => {
  let component: ProductCatchErrorComponent;
  let fixture: ComponentFixture<ProductCatchErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCatchErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCatchErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
