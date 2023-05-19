import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReturnComponent } from './all-return.component';

describe('AllReturnComponent', () => {
  let component: AllReturnComponent;
  let fixture: ComponentFixture<AllReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
