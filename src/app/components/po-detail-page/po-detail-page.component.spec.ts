import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoDetailPageComponent } from './po-detail-page.component';

describe('PoDetailPageComponent', () => {
  let component: PoDetailPageComponent;
  let fixture: ComponentFixture<PoDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
