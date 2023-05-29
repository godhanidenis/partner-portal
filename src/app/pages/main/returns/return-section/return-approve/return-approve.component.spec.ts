import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnApproveComponent } from './return-approve.component';

describe('ReturnApproveComponent', () => {
  let component: ReturnApproveComponent;
  let fixture: ComponentFixture<ReturnApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
