import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMailBoxesComponent } from './export-mail-boxes.component';

describe('ExportMailBoxesComponent', () => {
  let component: ExportMailBoxesComponent;
  let fixture: ComponentFixture<ExportMailBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportMailBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportMailBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
