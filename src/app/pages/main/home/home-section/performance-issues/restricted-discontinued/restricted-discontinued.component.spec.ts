import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedDiscontinuedComponent } from './restricted-discontinued.component';

describe('RestrictedDiscontinuedComponent', () => {
  let component: RestrictedDiscontinuedComponent;
  let fixture: ComponentFixture<RestrictedDiscontinuedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictedDiscontinuedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedDiscontinuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
