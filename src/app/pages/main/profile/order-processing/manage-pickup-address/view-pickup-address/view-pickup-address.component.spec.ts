import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPickupAddressComponent } from './view-pickup-address.component';

describe('ViewPickupAddressComponent', () => {
  let component: ViewPickupAddressComponent;
  let fixture: ComponentFixture<ViewPickupAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPickupAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPickupAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
