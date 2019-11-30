import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionInicioComponent } from './aplicacion-inicio.component';

describe('AplicacionInicioComponent', () => {
  let component: AplicacionInicioComponent;
  let fixture: ComponentFixture<AplicacionInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacionInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
