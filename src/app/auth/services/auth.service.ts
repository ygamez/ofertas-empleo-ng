import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { AuthResponse, UsuarioRequest } from '../interfaces/auth.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario: AuthResponse | undefined ;
  // private _usuario: UsuarioRequest ;
  // private _auth: AuthResponse | undefined;

  get usuario(){
    return { ...this._usuario } ;
  }

  constructor( private http :HttpClient ) { }

  login( email: string, password : string ){

    const url = `${ this.baseUrl }/Account/login`;
    const body = { email, password };

    return this.http.post<AuthResponse>( url, body)
        .pipe(
          tap( resp =>
             {
              if (resp.ok){
                localStorage.setItem( 'token', resp.token );
                localStorage.setItem( 'x-token', resp.refreshToken );
                this._usuario =
                {

                  ok: resp.ok ,
                  id:resp.id ,
                  nombre:resp.nombre ,
                  email:resp.email ,
                  token:resp.token ,
                  refreshToken:resp.refreshToken ,
                  message:resp.message ,

                }
              }
              }),
          map( resp => resp.ok ),
          catchError( err => of( err.error.message ) )
        )
  }

  validarToken() :Observable<boolean> {

    const url = `${ this.baseUrl }/Account/validartoken`;
    const headers = new HttpHeaders()
      .set( 'x-token', localStorage.getItem( 'x-token' ) || '' );

    return this.http.get<AuthResponse> ( url, { headers } )
            .pipe(
                map( resp => {
                  
                localStorage.setItem( 'x-token', resp.refreshToken );
                  this._usuario =
                  {

                    ok: resp.ok ,
                    id:resp.id ,
                    nombre:resp.nombre ,
                    email:resp.email ,
                    token:resp.token ,
                    refreshToken:resp.refreshToken ,
                    message:resp.message ,
                    
                  }

                 return resp.ok
                }),
                catchError( err => of(false) ));
    // return this.http.post(url, { headers } );
  }


  logout(){
    localStorage.clear();
  }










  // .pipe(
  //   tap( resp => {
  //     if (resp.ok){
  //       localStorage.setItem( 'token', resp.token );
  //       this._usuario = {

  //         email: resp.email,
  //         name: resp.email ,

  //       }

  //     }
  //   }),
  //   map( valid => valid.ok ),
  //   catchError( err => of( err.error.msj   ) )
  // );

  //-----------EJEMPLOS DE LLAMADAS GET
  // get auth() {
  //   return { ...this._auth}
  // }
  // login(){
  //   return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
  //   .pipe(
  //     tap( auth => this._auth = auth )
  //     );
  // }

}