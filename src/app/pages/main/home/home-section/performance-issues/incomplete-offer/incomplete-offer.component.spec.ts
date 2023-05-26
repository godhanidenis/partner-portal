import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompleteOfferComponent } from './incomplete-offer.component';

describe('IncompleteOfferComponent', () => {
  let component: IncompleteOfferComponent;
  let fixture: ComponentFixture<IncompleteOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncompleteOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncompleteOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
