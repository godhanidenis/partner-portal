import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchVerificationComponent } from './ach-verification.component';

describe('AchVerificationComponent', () => {
  let component: AchVerificationComponent;
  let fixture: ComponentFixture<AchVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
