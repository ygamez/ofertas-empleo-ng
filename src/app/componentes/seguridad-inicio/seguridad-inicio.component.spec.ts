import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadInicioComponent } from './seguridad-inicio.component';

describe('SeguridadInicioComponent', () => {
  let component: SeguridadInicioComponent;
  let fixture: ComponentFixture<SeguridadInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguridadInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
