import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoLabelAndInvoicePreferencesComponent } from './po-label-and-invoice-preferences.component';

describe('PoLabelAndInvoicePreferencesComponent', () => {
  let component: PoLabelAndInvoicePreferencesComponent;
  let fixture: ComponentFixture<PoLabelAndInvoicePreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoLabelAndInvoicePreferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoLabelAndInvoicePreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
