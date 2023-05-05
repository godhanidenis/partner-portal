import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPickupAddressComponent } from './add-pickup-address.component';

describe('AddPickupAddressComponent', () => {
  let component: AddPickupAddressComponent;
  let fixture: ComponentFixture<AddPickupAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPickupAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPickupAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
