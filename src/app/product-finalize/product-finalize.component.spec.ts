import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFinalizeComponent } from './product-finalize.component';

describe('ProductFinalizeComponent', () => {
  let component: ProductFinalizeComponent;
  let fixture: ComponentFixture<ProductFinalizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFinalizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFinalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
