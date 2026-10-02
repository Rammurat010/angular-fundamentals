import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangeChildComponent } from './on-change-child.component';

describe('OnChangeChildComponent', () => {
  let component: OnChangeChildComponent;
  let fixture: ComponentFixture<OnChangeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnChangeChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnChangeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
