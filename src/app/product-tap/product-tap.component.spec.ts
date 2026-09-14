import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTapComponent } from './product-tap.component';

describe('ProductTapComponent', () => {
  let component: ProductTapComponent;
  let fixture: ComponentFixture<ProductTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
