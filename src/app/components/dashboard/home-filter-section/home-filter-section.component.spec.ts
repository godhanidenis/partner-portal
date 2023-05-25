import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFilterSectionComponent } from './home-filter-section.component';

describe('HomeFilterSectionComponent', () => {
  let component: HomeFilterSectionComponent;
  let fixture: ComponentFixture<HomeFilterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFilterSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFilterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
