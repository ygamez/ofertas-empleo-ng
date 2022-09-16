import { Component, OnInit } from '@angular/core';
import {Encuesta} from '../../modelos/encuesta';
import {Pregunta} from '../../modelos/pregunta';
import {Respuesta} from '../../modelos/respuesta';
import {ListaVotantes} from '../../modelos/lista-votantes.model';
import {Subscription} from 'rxjs';
import {EncuestaService} from '../../servicios/encuesta.service';
import {UsuarioService} from '../../servicios/usuario.service';
import {ListaVotantesService} from '../../servicios/lista-votantes.service';
@Component({
  selector: 'app-categoria-inicio',
  templateUrl: './categoria-inicio.component.html',
  styleUrls: ['./categoria-inicio.component.css']
})
export class CategoriaInicioComponent implements OnInit {
  
  constructor() {

  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
}