import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePaymentStatusComponent } from './invoice-payment-status.component';

describe('InvoicePaymentStatusComponent', () => {
  let component: InvoicePaymentStatusComponent;
  let fixture: ComponentFixture<InvoicePaymentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicePaymentStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicePaymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
