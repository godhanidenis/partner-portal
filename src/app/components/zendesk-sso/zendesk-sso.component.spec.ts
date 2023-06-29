import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZendeskSSOComponent } from './zendesk-sso.component';

describe('ZendeskSSOComponent', () => {
  let component: ZendeskSSOComponent;
  let fixture: ComponentFixture<ZendeskSSOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZendeskSSOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZendeskSSOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
