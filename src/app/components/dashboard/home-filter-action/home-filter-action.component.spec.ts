import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFilterActionComponent } from './home-filter-action.component';

describe('HomeFilterActionComponent', () => {
  let component: HomeFilterActionComponent;
  let fixture: ComponentFixture<HomeFilterActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFilterActionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFilterActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
