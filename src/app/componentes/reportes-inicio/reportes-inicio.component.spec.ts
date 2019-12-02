import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesInicioComponent } from './reportes-inicio.component';

describe('ReportesInicioComponent', () => {
  let component: ReportesInicioComponent;
  let fixture: ComponentFixture<ReportesInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
