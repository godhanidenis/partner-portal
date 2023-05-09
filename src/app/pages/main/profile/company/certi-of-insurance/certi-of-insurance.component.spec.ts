import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertiOfInsuComponent } from './certi-of-insurance.component';

describe('CertiOfInsuComponent', () => {
  let component: CertiOfInsuComponent;
  let fixture: ComponentFixture<CertiOfInsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertiOfInsuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CertiOfInsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
