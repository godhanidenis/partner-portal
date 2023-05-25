import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitPriceConflictComponent } from './unit-price-conflict.component';

describe('UnitPriceConflictComponent', () => {
  let component: UnitPriceConflictComponent;
  let fixture: ComponentFixture<UnitPriceConflictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitPriceConflictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitPriceConflictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
