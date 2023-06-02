import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMultipleProductsComponent } from './edit-multiple-products.component';

describe('EditMultipleProductsComponent', () => {
  let component: EditMultipleProductsComponent;
  let fixture: ComponentFixture<EditMultipleProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditMultipleProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditMultipleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
