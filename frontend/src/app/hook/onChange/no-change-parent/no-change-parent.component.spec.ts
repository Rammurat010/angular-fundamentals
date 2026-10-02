import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoChangeParentComponent } from './no-change-parent.component';

describe('NoChangeParentComponent', () => {
  let component: NoChangeParentComponent;
  let fixture: ComponentFixture<NoChangeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoChangeParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoChangeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
