import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudenComponent } from './add-student.component';

describe('AddStudenComponent', () => {
  let component: AddStudenComponent;
  let fixture: ComponentFixture<AddStudenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStudenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddStudenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
