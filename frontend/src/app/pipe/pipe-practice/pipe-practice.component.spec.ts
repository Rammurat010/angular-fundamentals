import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePracticeComponent } from './pipe-practice.component';

describe('PipePracticeComponent', () => {
  let component: PipePracticeComponent;
  let fixture: ComponentFixture<PipePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipePracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
