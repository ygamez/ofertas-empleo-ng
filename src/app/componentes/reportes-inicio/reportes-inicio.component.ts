import { Component, OnInit } from '@angular/core';
import {ReportesService} from '../../servicios/reportes.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-reportes-inicio',
  templateUrl: './reportes-inicio.component.html',
  styleUrls: ['./reportes-inicio.component.css']
})
export class ReportesInicioComponent implements OnInit {
  public reporte = false;
  constructor(private reportesService: ReportesService) { }

  ngOnInit() {
  }
  public pdfCursosAprobados() {
    this.reporte = true;
    this.reportesService.pdfCursosAprobados().subscribe(
      response => {
        if ( response) {
          this.reporte = false;
          saveAs(response, 'reporte-cursos-aprobados.pdf');
        } else {
          // tratamiento de errores
        }
      },
      error => {
        // console.log(<any>error);
      }
    );
  }

  public pdfCursosNoAprobados() {
    this.reporte = true;
    this.reportesService.pdfCursosNoAprobados().subscribe(
      response => {
        if ( response) {
          this.reporte = false;
          saveAs(response, 'reporte-cursos-no-aprobados.pdf');
        } else {
          // tratamiento de errores
        }
      },
      error => {
        // console.log(<any>error);
      }
    );
  }
  public pdfCursoEvaluaciones() {
    this.reporte = true;
    this.reportesService.pdfCursoEvaluaciones().subscribe(
      response => {
        if ( response) {
          this.reporte = false;
          saveAs(response, 'reporte-evaluaciones-cursos.pdf');
        } else {
          // tratamiento de errores
        }
      },
      error => {
        // console.log(<any>error);
      }
    );
  }
  public pdfEvaluacionCurso() {
    this.reporte = true;
    this.reportesService.pdfEvaluacionCurso().subscribe(
      response => {
        if ( response) {
          this.reporte = false;
          saveAs(response, 'reporte-evaluacion-curso.pdf');
        } else {
          // tratamiento de errores
        }
      },
      error => {
        // console.log(<any>error);
      }
    );
  }
  public pdfEvaluacionesRangoFecha() {
    this.reporte = true;
    this.reportesService.pdfEvaluacionesRangoFecha().subscribe(
      response => {
        if ( response) {
          this.reporte = false;
          saveAs(response, 'reporte-evaluacion-cursos-rango-fecha.pdf');
        } else {
          // tratamiento de errores
        }
      },
      error => {
        // console.log(<any>error);
      }
    );
  }

}
