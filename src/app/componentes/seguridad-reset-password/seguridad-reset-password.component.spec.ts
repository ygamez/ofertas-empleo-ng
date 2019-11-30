import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadResetPasswordComponent } from './seguridad-reset-password.component';

describe('SeguridadResetPasswordComponent', () => {
  let component: SeguridadResetPasswordComponent;
  let fixture: ComponentFixture<SeguridadResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguridadResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
