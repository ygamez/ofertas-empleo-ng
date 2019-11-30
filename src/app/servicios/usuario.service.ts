import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../modelos/usuario.model';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: string;
  constructor(public http: HttpClient) {
    this.url = GLOBAL.url;
  }
  getUsers(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + 'seguridad/usuario/obtener-todos', {headers});
  }
  registro(user: Usuario): Observable<any> {
    const params = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'seguridad/usuario/nuevo', params, {headers});
  }

  updateUser(user: Usuario): Observable<any> {
    const params = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + 'seguridad/usuario', params, {headers});
  }

  deleteUser(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'seguridad/usuario/' + id, {headers});
  }
  getUser(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + 'seguridad/usuario/' + id, {headers});
  }
}
