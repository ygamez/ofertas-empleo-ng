import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNuevoComponent } from './curso-nuevo.component';

describe('CursoNuevoComponent', () => {
  let component: CursoNuevoComponent;
  let fixture: ComponentFixture<CursoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
