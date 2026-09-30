import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBindingComponent } from './two-binding.component';

describe('TwoBindingComponent', () => {
  let component: TwoBindingComponent;
  let fixture: ComponentFixture<TwoBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
