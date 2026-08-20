import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDirectiveComponent } from './event-directive.component';

describe('EventDirectiveComponent', () => {
  let component: EventDirectiveComponent;
  let fixture: ComponentFixture<EventDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
