import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../modelos/usuario.model';
import { Solictud } from '../modelos/solicitud';
import { GLOBAL } from './global';
import {SubirArchivosService} from './subir-archivos.service';
import {sha1} from 'node_modules/sha.js/sha1'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: string;
  public ruta: string;
  public identity;
  public datos;
  public token;
  constructor(public http: HttpClient, public subirArchivox: SubirArchivosService) {
    this.url = GLOBAL.url;
  }
  getUsers(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + '/usuario/registrar', {headers});
  }
  registro(user: Usuario): Observable<any> {
    const params = JSON.stringify(user);
    console.log(params);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + '/usuario/registrar', params, {headers});
  }
  registrodesolicitudempleo(solicitud: Solictud): Observable<any> {
    const params = JSON.stringify(solicitud);
    console.log(params);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + '/mensaje', params, {headers});
  }
  obternerprovincias(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + '/provincia', {headers});
    }

    obtenerticket(ticket): Observable<any> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.get(this.url + '/mensaje/unica?ticket='+ticket, {headers});
      }
   
  obtenerofertas(provinciaseleccionado,variable,nivelescolarseleccionado,salarioseleccionado,palabraseleccionado,inicio,cantidad): Observable<any> {
this.ruta=''
    if(variable!=undefined){
  this.ruta = '&municipio='+variable

}
if(nivelescolarseleccionado!=undefined){
  this.ruta = '&nivel_escolar='+nivelescolarseleccionado

}
if(salarioseleccionado!=undefined){
  this.ruta = '&minimo='+salarioseleccionado

}
if(palabraseleccionado!=undefined){
  this.ruta = '&palabra_clave='+palabraseleccionado

}
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
   
    return this.http.get(this.url + '/necesidades/filtrada?provincia=' + provinciaseleccionado + this.ruta+'&index='+inicio+'&count='+cantidad, {headers});
    }
    obtenerofertastotal(provinciaseleccionado,variable,nivelescolarseleccionado,salarioseleccionado,palabraseleccionado): Observable<any> {
      this.ruta=''
      if(variable!=undefined){
        this.ruta = '&municipio='+variable
      
      }
      if(nivelescolarseleccionado!=undefined){
        this.ruta = '&nivel_escolar='+nivelescolarseleccionado
      
      }
      if(salarioseleccionado!=undefined){
        this.ruta = '&minimo='+salarioseleccionado
      
      }
      if(palabraseleccionado!=undefined){
        this.ruta = '&palabra_clave='+palabraseleccionado
      
      }
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.get(this.url + '/necesidades/filtrada_count?provincia=' + provinciaseleccionado+this.ruta, {headers});
      }
/////////////////////////////////////////////////////////////////////////////////////
obtenerofertastpcp(provinciaseleccionado,variable,nivelescolarseleccionado,salarioseleccionado,palabraseleccionado,inicio,cantidad): Observable<any> {
  this.ruta=''
  if(variable!=undefined){
this.ruta = '&municipio='+variable

}
if(nivelescolarseleccionado!=undefined){
this.ruta = '&nivel_escolar='+nivelescolarseleccionado

}
if(salarioseleccionado!=undefined){
this.ruta = '&minimo='+salarioseleccionado

}
if(palabraseleccionado!=undefined){
this.ruta = '&palabra_clave='+palabraseleccionado

}
  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this.http.get(this.url + '/ofertatpcp/filtrada?provincia?id=' + provinciaseleccionado+this.ruta+ '&index='+inicio+'&count='+cantidad, {headers});
  }
obtenerofertastotaltpcp(provinciaseleccionado,variable,nivelescolarseleccionado,salarioseleccionado,palabraseleccionado): Observable<any> {
  this.ruta=''
  if(variable!=undefined){
this.ruta = '&municipio='+variable

}
if(nivelescolarseleccionado!=undefined){
this.ruta = '&nivel_escolar='+nivelescolarseleccionado

}
if(salarioseleccionado!=undefined){
this.ruta = '&minimo='+salarioseleccionado

}
if(palabraseleccionado!=undefined){
this.ruta = '&palabra_clave='+palabraseleccionado

}
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + '/necesidades/filtrada_count?provincia=' + provinciaseleccionado+ this.ruta, {headers});
    }
    ////////////////////////////

  obternermunicipios(variable): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + '/municipio/provincia?id=' + variable, {headers});
  }

  updateUser(user: Usuario): Observable<any> {
    const params = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + 'api/useractualizar/' + user.id, params, {headers});
  }

  deleteUser(user: Usuario): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'api/user/' + user.id, {headers});
  }
  getUser(id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (id === this.identity._id) {
    return this.http.get(this.url + 'api/usersolo/' + id, {headers});
    }
  }
  getUser1(id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const identity = JSON.parse(localStorage.getItem('identity'));
    return this.http.get(this.url + 'api/usersolo/' + id, {headers});
  }
  login(usuario: any, gettoken = null): Observable<any> {
    if (gettoken != null) {
      usuario.gettoken = gettoken;
    }

    const params = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'login', params, {headers});
  }

  loginget(usuario: any, gettoken = null): Observable<any> {
    if (gettoken != null) {
      usuario.gettoken = gettoken;
    }
    const params = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get('https://apiempleo.xutil.net/apiempleo/usuario/loginapk?email=' + usuario.email+ '&password='+ usuario.password);
  }

  logingetdatostodo(id: number, tipousuario: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    if(tipousuario==4){
    return this.http.get("https://apiempleo.xutil.net/apiempleo/personanatural/usuario?id=" + id);

  }
}

  getIdentity() {
    console.log(localStorage.getItem('identity'))
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (identity !== undefined) {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getDatosUsuario() {
    console.log(localStorage.getItem('datosusuario'))
    const datos = JSON.parse(localStorage.getItem('datosusuario'));
    if (datos !== undefined) {
      this.datos = datos;
    } else {
      this.datos = null;
    }
    return this.datos;
  }

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
    localStorage.removeItem('datosusuario');

  }
  cambiarImagen(archivo: File, tipo: string, id: string) {
    this.subirArchivox.subirArchivo(archivo, tipo, id)
      .then(cosa => {
      })
      .catch(cosa => {
      });
  }
  EliminiarImagen( tipo: string, id: string) {
    this.subirArchivox.BorrarArchivo(tipo, id)
      .then(cosa => {
      })
      .catch(cosa => {
      });
  }
  getListas(token1: any) {

    return this.http.get(this.url + 'list?token=' + token1)
      .map((resp: any) => {
        return resp.votantlists;
      })
      .catch(err => {
        return Observable.throw(err);
      });
  }
}
