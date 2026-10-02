import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterContentCheckedParentComponent } from './ng-after-content-checked-parent.component';

describe('NgAfterContentCheckedParentComponent', () => {
  let component: NgAfterContentCheckedParentComponent;
  let fixture: ComponentFixture<NgAfterContentCheckedParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAfterContentCheckedParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAfterContentCheckedParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
