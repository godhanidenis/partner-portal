import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W9SetupComponent } from './w9-setup.component';

describe('w9SetupComponent', () => {
  let component: W9SetupComponent;
  let fixture: ComponentFixture<W9SetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [W9SetupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(W9SetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
