import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactPreferenceComponent } from './add-contact-preference.component';

describe('AddContactPreferenceComponent', () => {
  let component: AddContactPreferenceComponent;
  let fixture: ComponentFixture<AddContactPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContactPreferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContactPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
