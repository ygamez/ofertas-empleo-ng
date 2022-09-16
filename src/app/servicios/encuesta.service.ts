import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GLOBAL} from './global';
import {Observable} from 'rxjs';
import {Respuesta} from '../modelos/respuesta';
import {Encuesta} from '../modelos/encuesta';
import {UsuarioService} from './usuario.service';
import {Pregunta} from '../modelos/pregunta';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ListaVotantes} from '../modelos/lista-votantes.model';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  public url: string;
  public encuestas: Encuesta[];
  public preguntass: Pregunta[];
  public respuestass: Respuesta[];
  constructor(public http: HttpClient, private _usuario: UsuarioService) {
    this.url = GLOBAL.url;

  }
  obtenerEncuestas(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + 'api/poll', {headers});
  }
  obtenerEncuesta(id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + 'api/poll/' + id, {headers});
    
  }
  obtenerPreguntas(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + 'api/question', {headers});
  }
  obtenerRespuestas(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + 'api/answer', {headers});
  }
  enviarEncuestaRespuesta(encuesta: Encuesta): Observable<any> {
    const params = JSON.stringify(encuesta);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'api/votar/respuesta', params, {headers});
  }
  crearEncuesta(encuesta): Observable<any> {
    const params = JSON.stringify(encuesta);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'api/poll', params, {headers});
  }
  actualizarEncuesta(encuesta: Encuesta): Observable<any> {
    const params = JSON.stringify(encuesta);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + 'api/actualizarencuesta/' + encuesta._id, params, {headers});
  }
  eliminarEncuesta(encuesta): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'api/poll/' + encuesta, {headers});
  }
  eliminarPregu(pregunta): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'api/question/' + pregunta, {headers});
  }
  crearPregunta(encuesta, id): Observable<any> {
    const params = JSON.stringify(encuesta);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'api/poll' + id + '/question', params, {headers});
  }
  crearRespuesta(encuesta, ide, idp): Observable<any> {
    const params = JSON.stringify(encuesta);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'api/poll' + ide + '/question' + idp + '/answer', params, {headers});
  }
  eliminarRespuesta(encuesta): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'api/answer/' + encuesta, {headers});
  }
  getEncuestasp(): Observable<Encuesta[]> {
    return this.http.get('http://localhost:3000/busqueda/coleccion/poll/Publica')
      .map((resp: any) => {
        return resp.poll;
      })
      .catch(err => {
        return Observable.throw(err);
      });
  }

  getEncuestasMias(token1): Observable<Encuesta[]> {
    let arreglo: Encuesta[];
    arreglo = [];
    return this.http.get('http://localhost:3000/api/poll?token=' + token1)
      .map((resp: any) => {
        this.encuestas = resp.encuestas;
        for (let index = 0; index < this.encuestas.length; index++) {
          if (this.encuestas[index].usuario === this._usuario.getIdentity()._id) {
            arreglo.push(this.encuestas[index]);
          }
        }
        return arreglo;
      })
      .catch(err => {
        return Observable.throw(err);
      });
  }
  getPreguntass(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/busqueda/coleccion/question/' + id)
      .map((resp: any) => {
        this.preguntass = resp.question;
        return this.arreglar();
      })
      .catch(err => {
        return Observable.throw(err);
      });
  }
  arreglar() {
    let arreglo= [];
    this.preguntass.forEach(element => {
      this.getRespuestass(element._id)
        .subscribe(respuestas => element.respuesta = respuestas);
    });
    return this.preguntass;
  }
  getRespuestass(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/busqueda/coleccion/answer/' + id)
      .map((resp: any) => {
        this.respuestass = resp.answer;
        return this.respuestass;
      })
      .catch(err => {
        return Observable.throw(err);
      });
  }
}
