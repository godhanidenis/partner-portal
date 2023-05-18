import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledPaymentsComponent } from './scheduled-payments.component';

describe('ScheduledPaymentsComponent', () => {
  let component: ScheduledPaymentsComponent;
  let fixture: ComponentFixture<ScheduledPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
