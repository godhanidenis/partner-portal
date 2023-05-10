import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchSectionComponent } from './ach-section.component';

describe('AchSectionComponent', () => {
  let component: AchSectionComponent;
  let fixture: ComponentFixture<AchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
