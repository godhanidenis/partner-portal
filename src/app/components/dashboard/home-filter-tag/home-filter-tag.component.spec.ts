import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFilterTagComponent } from './home-filter-tag.component';

describe('HomeFilterTagComponent', () => {
  let component: HomeFilterTagComponent;
  let fixture: ComponentFixture<HomeFilterTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFilterTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFilterTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
