import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservalbleFromComponent } from './observalble-from.component';

describe('ObservalbleFromComponent', () => {
  let component: ObservalbleFromComponent;
  let fixture: ComponentFixture<ObservalbleFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservalbleFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservalbleFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
