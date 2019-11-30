import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoInicioComponent } from './curso-inicio.component';

describe('CursoInicioComponent', () => {
  let component: CursoInicioComponent;
  let fixture: ComponentFixture<CursoInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
