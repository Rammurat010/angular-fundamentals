import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctUntilChangedComponent } from './distinct-until-changed.component';

describe('DistinctUntilChangedComponent', () => {
  let component: DistinctUntilChangedComponent;
  let fixture: ComponentFixture<DistinctUntilChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistinctUntilChangedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistinctUntilChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
