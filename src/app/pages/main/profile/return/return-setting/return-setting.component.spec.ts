import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnSettingComponent } from './return-setting.component';

describe('ReturnSettingComponent', () => {
  let component: ReturnSettingComponent;
  let fixture: ComponentFixture<ReturnSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
