import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Usuario} from '../../modelos/usuario.model';
import {ActivatedRoute} from '@angular/router';
import {ActVarPageService} from '../../servicios/act-var-page.service';
import {UsuarioService} from '../../servicios/usuario.service';
import {Curso} from '../../modelos/curso.model';
import {CursoService} from '../../servicios/curso.service';

@Component({
  selector: 'app-curso-detalles',
  templateUrl: './curso-detalles.component.html',
  styleUrls: ['./curso-detalles.component.css']
})
export class CursoDetallesComponent implements OnInit {

  public valorId = '';
  public curso: Curso;
  @Output() message = new EventEmitter<string>();

  @Output() messageEvent = new EventEmitter<string>();
  constructor(activateRoute: ActivatedRoute, private dataService: ActVarPageService, private cursoService: CursoService) {
    this.valorId = activateRoute.snapshot.params.id;
    this.dataService.updateData('Detalles del curso seleccionado');
  }

  ngOnInit() {
    this.getUsuario(this.valorId);
  }
  getUsuario(id) {
    this.cursoService.getCurso(id).subscribe(
      response => {
        if ( !response) {
          // existe un error hay que manejarlo
        } else {
          this.curso = response;
        }
      },
      error => {
        // hago algo con el error
      }
    );
  }

}
