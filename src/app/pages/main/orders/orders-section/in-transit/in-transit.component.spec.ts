import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTransitComponent } from './in-transit.component';

describe('InTransitComponent', () => {
  let component: InTransitComponent;
  let fixture: ComponentFixture<InTransitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTransitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
