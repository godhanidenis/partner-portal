import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationRequestedComponent } from './cancellation-requested.component';

describe('CancellationRequestedComponent', () => {
  let component: CancellationRequestedComponent;
  let fixture: ComponentFixture<CancellationRequestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancellationRequestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancellationRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
