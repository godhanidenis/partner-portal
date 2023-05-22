import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledPromotionsComponent } from './scheduled-promotions.component';

describe('ScheduledPromotionsComponent', () => {
  let component: ScheduledPromotionsComponent;
  let fixture: ComponentFixture<ScheduledPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledPromotionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
