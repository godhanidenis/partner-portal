import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedProductPriceErrorComponent } from './restricted-product-price-error.component';

describe('RestrictedProductPriceErrorComponent', () => {
  let component: RestrictedProductPriceErrorComponent;
  let fixture: ComponentFixture<RestrictedProductPriceErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictedProductPriceErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedProductPriceErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
