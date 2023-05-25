import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscontinuedUpdateComponent } from './discontinued-update.component';

describe('DiscontinuedUpdateComponent', () => {
  let component: DiscontinuedUpdateComponent;
  let fixture: ComponentFixture<DiscontinuedUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscontinuedUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscontinuedUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
