import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import {Curso} from '../modelos/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  public url: string;
  constructor(public http: HttpClient) {
    this.url = GLOBAL.url;
  }
  getCursos(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + 'curso/todos', {headers});
  }
  pdfCurso(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/pdf');
    return this.http.get(this.url + 'reportes/evaluacion-curso/yamir', {responseType: 'blob', headers: {Accept: 'application/pdf'}});
  }
  newCurso(curso: Curso): Observable<any> {
    const params = JSON.stringify(curso);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'curso/nuevo', params, {headers});
  }

  updateCurso(curso: Curso): Observable<any> {
    const params = JSON.stringify(curso);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + 'curso/actualizar', params, {headers});
  }

  deleteCurso(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'curso/eliminar/' + id, {headers});
  }
  getCurso(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + 'curso/obtener/' + id, {headers});
  }
}
