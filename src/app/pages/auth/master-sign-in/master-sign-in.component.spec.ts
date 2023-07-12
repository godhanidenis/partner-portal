import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSignInComponent } from './master-sign-in.component';

describe('MasterSignInComponent', () => {
  let component: MasterSignInComponent;
  let fixture: ComponentFixture<MasterSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterSignInComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
