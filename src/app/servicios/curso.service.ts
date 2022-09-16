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
  getMessages(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + 'api/my-messages', {headers});
  }
  newMessage(curso: Curso): Observable<any> {
    const params = JSON.stringify(curso);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'api/message', params, {headers});
  }

  updateMessage(curso: Curso): Observable<any> {
    const params = JSON.stringify(curso);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + 'curso/actualizar', params, {headers});
  }

  deleteMessage(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log('servicio'+'' +id)
    return this.http.delete(this.url + 'api/eliminar/' + id, {headers});

  }
  getMessage(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + 'curso/obtener/' + id, {headers});
  }
}
