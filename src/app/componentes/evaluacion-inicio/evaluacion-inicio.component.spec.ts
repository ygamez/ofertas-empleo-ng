import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionInicioComponent } from './evaluacion-inicio.component';

describe('EvaluacionInicioComponent', () => {
  let component: EvaluacionInicioComponent;
  let fixture: ComponentFixture<EvaluacionInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
