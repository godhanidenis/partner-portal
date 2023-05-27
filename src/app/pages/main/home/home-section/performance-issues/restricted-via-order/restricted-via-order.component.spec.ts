import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedViaOrderComponent } from './restricted-via-order.component';

describe('RestrictedViaOrderComponent', () => {
  let component: RestrictedViaOrderComponent;
  let fixture: ComponentFixture<RestrictedViaOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictedViaOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedViaOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
