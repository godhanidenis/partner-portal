import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPromotionsComponent } from './completed-promotions.component';

describe('CompletedPromotionsComponent', () => {
  let component: CompletedPromotionsComponent;
  let fixture: ComponentFixture<CompletedPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedPromotionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
