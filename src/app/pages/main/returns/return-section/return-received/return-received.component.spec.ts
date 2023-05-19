import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnReceivedComponent } from './return-received.component';

describe('ReturnReceivedComponent', () => {
  let component: ReturnReceivedComponent;
  let fixture: ComponentFixture<ReturnReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
