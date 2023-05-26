import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LackOfSalesDemandComponent } from './lack-of-sales-demand.component';

describe('LackOfSalesDemandComponent', () => {
  let component: LackOfSalesDemandComponent;
  let fixture: ComponentFixture<LackOfSalesDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LackOfSalesDemandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LackOfSalesDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
