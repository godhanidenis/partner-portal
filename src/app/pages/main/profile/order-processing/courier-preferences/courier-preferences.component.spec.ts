import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierPreferencesComponent } from './courier-preferences.component';

describe('CourierPreferencesComponent', () => {
  let component: CourierPreferencesComponent;
  let fixture: ComponentFixture<CourierPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierPreferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
