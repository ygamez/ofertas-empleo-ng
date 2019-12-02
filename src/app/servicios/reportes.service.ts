import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GLOBAL} from './global';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  public url: string;
  constructor(public http: HttpClient) {
    this.url = GLOBAL.url;
  }
  pdfCursosAprobados(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/pdf');
    return this.http.get(this.url + 'reportes/evaluacion-cursos-aprobado/yamir', {responseType: 'blob', headers: {Accept: 'application/pdf'}});
  }
  pdfCursosNoAprobados(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/pdf');
    return this.http.get(this.url + 'reportes/evaluacion-cursos-no-aprobado/yamir', {responseType: 'blob', headers: {Accept: 'application/pdf'}});
  }
  pdfCursoEvaluaciones(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/pdf');
    return this.http.get(this.url + 'reportes/evaluacion-curso-todas/yamir', {responseType: 'blob', headers: {Accept: 'application/pdf'}});
  }
  pdfEvaluacionesRangoFecha(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/pdf');
    return this.http.get(this.url + 'reportes/evaluacion-cursos-rango-fecha/yamir', {responseType: 'blob', headers: {Accept: 'application/pdf'}});
  }
  pdfEvaluacionCurso(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/pdf');
    return this.http.get(this.url + 'reportes/evaluacion-curso/yamir', {responseType: 'blob', headers: {Accept: 'application/pdf'}});
  }
}
