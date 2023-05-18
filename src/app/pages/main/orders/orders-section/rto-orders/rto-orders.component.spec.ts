import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtoOrdersComponent } from './rto-orders.component';

describe('RtoOrdersComponent', () => {
  let component: RtoOrdersComponent;
  let fixture: ComponentFixture<RtoOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtoOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtoOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
