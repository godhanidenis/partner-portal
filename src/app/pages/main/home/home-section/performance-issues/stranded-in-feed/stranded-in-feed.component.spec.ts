import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrandedInFeedComponent } from './stranded-in-feed.component';

describe('StrandedInFeedComponent', () => {
  let component: StrandedInFeedComponent;
  let fixture: ComponentFixture<StrandedInFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrandedInFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrandedInFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
