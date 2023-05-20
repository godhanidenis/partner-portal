import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDotMenuBtnComponent } from './three-dot-menu-btn.component';

describe('ThreeDotMenuBtnComponent', () => {
  let component: ThreeDotMenuBtnComponent;
  let fixture: ComponentFixture<ThreeDotMenuBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDotMenuBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDotMenuBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
