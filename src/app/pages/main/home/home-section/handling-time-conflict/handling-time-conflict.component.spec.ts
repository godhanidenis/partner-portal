import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingTimeConflictComponent } from './handling-time-conflict.component';

describe('HandlingTimeConflictComponent', () => {
  let component: HandlingTimeConflictComponent;
  let fixture: ComponentFixture<HandlingTimeConflictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlingTimeConflictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandlingTimeConflictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
