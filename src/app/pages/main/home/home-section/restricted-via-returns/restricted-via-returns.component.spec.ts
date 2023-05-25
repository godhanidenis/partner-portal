import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedViaReturnsComponent } from './restricted-via-returns.component';

describe('RestrictedViaReturnsComponent', () => {
  let component: RestrictedViaReturnsComponent;
  let fixture: ComponentFixture<RestrictedViaReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictedViaReturnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedViaReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
