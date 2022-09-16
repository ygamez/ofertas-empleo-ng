import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import {ListaVotantes} from '../modelos/lista-votantes.model';
import {Usuario} from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ListaVotantesService {
  public url: string;
  constructor(public http: HttpClient) {
    this.url = GLOBAL.url;
  }
  crearListaVotantes(lista: ListaVotantes): Observable<any> {
    const params = JSON.stringify(lista);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'api/list', params, {headers});
  }
  actualizarListaVotantes(lista: ListaVotantes): Observable<any> {
    const params = JSON.stringify(lista);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + 'api/list' + lista._id, params, {headers});
  }
  obtenerListaVotantes(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + 'api/list', {headers});
  }
  obtenerListaVotanteId(idLista): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + 'api/list' + idLista, {headers});
  }
  eliminarLista(idLista): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'api/list/eliminar' + idLista, {headers});
  }
  adicinarFavorito(usuario: Usuario): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + 'api/user/favorito/' + usuario.id, usuario , {headers});
  }
  adicinarFavoritoEncuesta(usuario: Usuario): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + 'api/user/favoritoencuesta/' + usuario.id, usuario , {headers});
  }


}
