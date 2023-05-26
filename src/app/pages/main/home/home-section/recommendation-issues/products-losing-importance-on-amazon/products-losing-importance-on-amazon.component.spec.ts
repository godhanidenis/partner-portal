import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLosingImportanceOnAmazonComponent } from './products-losing-importance-on-amazon.component';

describe('ProductsLosingImportanceOnAmazonComponent', () => {
  let component: ProductsLosingImportanceOnAmazonComponent;
  let fixture: ComponentFixture<ProductsLosingImportanceOnAmazonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLosingImportanceOnAmazonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsLosingImportanceOnAmazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
