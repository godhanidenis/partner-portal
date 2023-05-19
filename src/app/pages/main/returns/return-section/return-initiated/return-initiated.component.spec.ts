import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnInitiatedComponent } from './return-initiated.component';

describe('ReturnInitiatedComponent', () => {
  let component: ReturnInitiatedComponent;
  let fixture: ComponentFixture<ReturnInitiatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnInitiatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnInitiatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
