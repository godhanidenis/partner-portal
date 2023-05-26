import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingLabelComponent } from './shipping-label.component';

describe('ShippingLabelComponent', () => {
  let component: ShippingLabelComponent;
  let fixture: ComponentFixture<ShippingLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippingLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShippingLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
