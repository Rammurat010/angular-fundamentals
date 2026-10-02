import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterViewCheckedComponent } from './ng-after-view-checked.component';

describe('NgAfterViewCheckedComponent', () => {
  let component: NgAfterViewCheckedComponent;
  let fixture: ComponentFixture<NgAfterViewCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAfterViewCheckedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAfterViewCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
