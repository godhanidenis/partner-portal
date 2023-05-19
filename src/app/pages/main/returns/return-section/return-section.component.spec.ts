import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnSectionComponent } from './return-section.component';

describe('ReturnSectionComponent', () => {
  let component: ReturnSectionComponent;
  let fixture: ComponentFixture<ReturnSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
