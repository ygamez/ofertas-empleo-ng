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
  public identity
  public token;
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

  // Método para LOGIN: si llega gettoken a 'true' devuelve un hash
  login(usuario: any, gettoken = null): Observable<any> {
    if (gettoken != null) {
      usuario.gettoken = gettoken;
    }

    const params = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'seguridad/usuario/autenticar', params, {headers});
  }

  // Método para sacar los datos del usuario del LOCALSTORAGE
  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));

    if (identity !== undefined){
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  // Método para sacar el TOKEN del LOCALSTORAGE
  getToken() {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token !== undefined) {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('identity');
  }
}
