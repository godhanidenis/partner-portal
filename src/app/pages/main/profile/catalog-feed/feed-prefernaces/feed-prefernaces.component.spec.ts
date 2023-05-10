import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPrefernacesComponent } from './feed-prefernaces.component';

describe('FeedPrefernacesComponent', () => {
  let component: FeedPrefernacesComponent;
  let fixture: ComponentFixture<FeedPrefernacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedPrefernacesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedPrefernacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
