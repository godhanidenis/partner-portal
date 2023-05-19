import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnInTransitComponent } from './return-in-transit.component';

describe('ReturnInTransitComponent', () => {
  let component: ReturnInTransitComponent;
  let fixture: ComponentFixture<ReturnInTransitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnInTransitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnInTransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
