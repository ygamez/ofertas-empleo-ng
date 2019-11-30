import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadLoginComponent } from './seguridad-login.component';

describe('SeguridadLoginComponent', () => {
  let component: SeguridadLoginComponent;
  let fixture: ComponentFixture<SeguridadLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguridadLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
