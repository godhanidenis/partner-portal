import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationIssueTableComponent } from './recommendation-issue-table.component';

describe('RecommendationIssueTableComponent', () => {
  let component: RecommendationIssueTableComponent;
  let fixture: ComponentFixture<RecommendationIssueTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationIssueTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationIssueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
