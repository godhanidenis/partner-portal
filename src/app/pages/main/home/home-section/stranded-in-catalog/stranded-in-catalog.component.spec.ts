import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrandedInCatalogComponent } from './stranded-in-catalog.component';

describe('StrandedInCatalogComponent', () => {
  let component: StrandedInCatalogComponent;
  let fixture: ComponentFixture<StrandedInCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrandedInCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrandedInCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
