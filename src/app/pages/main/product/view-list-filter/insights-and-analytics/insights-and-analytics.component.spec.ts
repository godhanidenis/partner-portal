import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsAndAnalyticsComponent } from './insights-and-analytics.component';

describe('InsightsAndAnalyticsComponent', () => {
  let component: InsightsAndAnalyticsComponent;
  let fixture: ComponentFixture<InsightsAndAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightsAndAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsightsAndAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
