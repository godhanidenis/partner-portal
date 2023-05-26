import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedCannotShipGroundComponent } from './restricted-cannot-ship-ground.component';

describe('RestrictedCannotShipGroundComponent', () => {
  let component: RestrictedCannotShipGroundComponent;
  let fixture: ComponentFixture<RestrictedCannotShipGroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictedCannotShipGroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedCannotShipGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
