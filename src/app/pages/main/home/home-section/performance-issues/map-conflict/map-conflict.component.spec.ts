import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapConflictComponent } from './map-conflict.component';

describe('MapConflictComponent', () => {
  let component: MapConflictComponent;
  let fixture: ComponentFixture<MapConflictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapConflictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapConflictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
