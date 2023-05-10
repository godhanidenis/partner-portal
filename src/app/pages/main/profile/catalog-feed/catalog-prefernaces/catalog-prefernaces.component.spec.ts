import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogrefernacesComponent } from './catalog-prefernaces.component';

describe('CatalogrefernacesComponent', () => {
  let component: CatalogrefernacesComponent;
  let fixture: ComponentFixture<CatalogrefernacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogrefernacesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogrefernacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
