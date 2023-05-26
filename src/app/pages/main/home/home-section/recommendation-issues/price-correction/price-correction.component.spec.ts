import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCorrectionComponent } from './price-correction.component';

describe('PriceCorrectionComponent', () => {
  let component: PriceCorrectionComponent;
  let fixture: ComponentFixture<PriceCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceCorrectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
