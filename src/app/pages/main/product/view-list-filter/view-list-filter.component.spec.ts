import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListFilterComponent } from './view-list-filter.component';

describe('ViewListFilterComponent', () => {
  let component: ViewListFilterComponent;
  let fixture: ComponentFixture<ViewListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewListFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
