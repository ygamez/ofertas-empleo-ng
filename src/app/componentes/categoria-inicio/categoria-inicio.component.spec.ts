import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaInicioComponent } from './categoria-inicio.component';

describe('CategoriaInicioComponent', () => {
  let component: CategoriaInicioComponent;
  let fixture: ComponentFixture<CategoriaInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
