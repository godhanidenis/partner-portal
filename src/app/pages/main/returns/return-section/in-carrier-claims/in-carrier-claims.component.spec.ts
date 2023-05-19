import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCarrierClaimsComponent } from './in-carrier-claims.component';

describe('InCarrierClaimsComponent', () => {
  let component: InCarrierClaimsComponent;
  let fixture: ComponentFixture<InCarrierClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCarrierClaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCarrierClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
