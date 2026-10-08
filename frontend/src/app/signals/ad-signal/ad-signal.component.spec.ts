import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSignalComponent } from './ad-signal.component';

describe('AdSignalComponent', () => {
  let component: AdSignalComponent;
  let fixture: ComponentFixture<AdSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
