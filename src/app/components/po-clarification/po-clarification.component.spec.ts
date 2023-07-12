import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoClarificationComponent } from './po-clarification.component';

describe('PoClarificationComponent', () => {
  let component: PoClarificationComponent;
  let fixture: ComponentFixture<PoClarificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoClarificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoClarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
