import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../modelos/usuario.model';
import { GLOBAL } from './global';
import {SubirArchivosService} from './subir-archivos.service';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {
  public url: string;
  public identity;
  public token;
  constructor(public http: HttpClient, public subirArchivox: SubirArchivosService) {
    this.url = GLOBAL.url;
  }
  getMunicipio(dato): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + '/municipio/provincia?id=' + dato, {headers});
  }
}
