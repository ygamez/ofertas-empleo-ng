import { Component, OnInit } from '@angular/core';
import {ReportesService} from '../../servicios/reportes.service';
import { saveAs } from 'file-saver';
declare var $: any;

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
    if (this.reporte) {
      this.notificacion('Reporte PDF... ', 'Ya existe una tarea de generar reporte activa, por favor espere a que termine', 'warning');
    } else {
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
  }

  public pdfCursosNoAprobados() {
    if (this.reporte) {
      this.notificacion('Reporte PDF... ', 'Ya existe una tarea de generar reporte activa, por favor espere a que termine', 'warning');
    } else {
      this.reporte = true;
      this.reportesService.pdfCursosNoAprobados().subscribe(
        response => {
          if (response) {
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
  }
  public pdfCursoEvaluaciones() {
    if (this.reporte) {
      this.notificacion('Reporte PDF... ', 'Ya existe una tarea de generar reporte activa, por favor espere a que termine', 'warning');
    } else {
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
  }
  public pdfEvaluacionCurso() {
    if (this.reporte) {
      this.notificacion('Reporte PDF... ', 'Ya existe una tarea de generar reporte activa, por favor espere a que termine', 'warning');
    } else {
      this.reporte = true;
      this.reportesService.pdfEvaluacionCurso().subscribe(
        response => {
          if (response) {
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
  }
  public pdfEvaluacionesRangoFecha() {
    if (this.reporte) {
      this.notificacion('Reporte PDF... ', 'Ya existe una tarea de generar reporte activa, por favor espere a que termine', 'warning');
    } else {
      this.reporte = true;
      this.reportesService.pdfEvaluacionesRangoFecha().subscribe(
        response => {
          if (response) {
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
  public notificacion(titulo: string, mensage: string, type: string) {
    $.growl({
      title: titulo,
      message: mensage,
      url: ''
    }, {
      element: 'body',
      type: type,
      allow_dismiss: true,
      placement: {
        from: 'top',
        align: 'right'
      },
      offset: {
        x: 30,
        y: 30
      },
      spacing: 10,
      z_index: 999999,
      delay: 2500,
      timer: 1000,
      url_target: '_blank',
      mouse_over: true,
      animate: {
        enter: 'animated fadeIn',
        exit: 'animated fadeOut'
      },
      icon_type: 'class',
    });
  }

}
