import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterContentCheckedChildComponent } from './ng-after-content-checked-child.component';

describe('NgAfterContentCheckedChildComponent', () => {
  let component: NgAfterContentCheckedChildComponent;
  let fixture: ComponentFixture<NgAfterContentCheckedChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAfterContentCheckedChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAfterContentCheckedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
