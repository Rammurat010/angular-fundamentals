import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDestroyComponent } from './ng-destroy.component';

describe('NgDestroyComponent', () => {
  let component: NgDestroyComponent;
  let fixture: ComponentFixture<NgDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgDestroyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
