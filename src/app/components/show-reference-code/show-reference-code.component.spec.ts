import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReferenceCodeComponent } from './show-reference-code.component';

describe('ShowReferenceCodeComponent', () => {
  let component: ShowReferenceCodeComponent;
  let fixture: ComponentFixture<ShowReferenceCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReferenceCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowReferenceCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
