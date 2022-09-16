import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurriculoResponse } from '../interfaces/curriculo.interface';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  curriculo : CurriculoResponse[] = [] ;
  private baseUrl: string = environment.baseUrl ;

  constructor( private http: HttpClient, 
               private authService: AuthService  ) { }

  getCurriculos (): Observable<CurriculoResponse[]>{
    const urlid =  'https://localhost:44392/api/Curriculoes/1';
    return this.http.get<CurriculoResponse[]>( `${ this.baseUrl }/api/Curriculoes` ) ;
  }
  getCurriculoXId ( id : number ): Observable<CurriculoResponse>{
    return this.http.get<CurriculoResponse>( `${ this.baseUrl }/api/Curriculoes/${ id }` ) ;
  }
  getCurriculosXuser ( usuarioid: string ): Observable<CurriculoResponse>{
    return this.http.get<CurriculoResponse>( `${ this.baseUrl }/api/Curriculoes/xusuario/${usuarioid}` ) ;
  }

  addCurriculo( curriculo: CurriculoResponse ) :Observable<CurriculoResponse> {
    return this.http.post<CurriculoResponse>( `${ this.baseUrl }/api/Curriculoes`, curriculo );
  }
  actualizarCurriculo( curriculo: CurriculoResponse ) :Observable<CurriculoResponse> {
    return this.http.put<CurriculoResponse>( `${ this.baseUrl }/api/Curriculoes/${ curriculo.id }`, curriculo );
  }
  borrarCurriculo( id: number ) :Observable<{}> {
    return this.http.delete<{}>( `${ this.baseUrl }/api/Curriculoes/${ id }` );
  }

}
