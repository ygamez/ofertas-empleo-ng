import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../servicios/curso.service';
import {Usuario} from '../../modelos/usuario.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActVarPageService} from '../../servicios/act-var-page.service';
import {UsuarioService} from '../../servicios/usuario.service';
import {Curso} from '../../modelos/curso.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-curso-admin',
  templateUrl: './curso-admin.component.html',
  styleUrls: ['./curso-admin.component.css'],
  providers  : [CursoService]
})
export class CursoAdminComponent implements OnInit {
  public cursos: Curso[];
  private lastUpdated: Date;
  constructor(private dataService: ActVarPageService, private cursoService: CursoService) {
    this.lastUpdated = new Date('2019/11/21 17:10:10');
  }

  ngOnInit() {
    this.dataService.updateData('Listado de todos los cursos');
    this.getCursos();
  }
  eliminar(cursoId) {
    Swal.fire({
      title: '¿Usted esta Seguro?',
      text: 'Eliminar el curso selecionado de manera permanente',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.cursoService.deleteCurso(cursoId).subscribe(
          response => {
            if ( response && response.id) {
              for (let i = 0; i < this.cursos.length; i++) {
                if (this.cursos[i].id === response.id) {
                  this.cursos.splice(i, 1);
                  Swal.fire(
                    'Eliminar Curso',
                    'Se elimino correctamente',
                    'success'
                  );
                }
              }
            } else {
              // tratamiento de errores
            }
          },
          error => {
            // console.log(<any>error);
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // accion de cuando se ejecuta el boton de cancelar
      }
    });

  }
  getCursos() {
    this.cursoService.getCursos().subscribe(
      response => {
        if ( !response) {
          // existe un error hay que manejarlo
        } else {
          this.cursos = response;
        }
      },
      error => {
        // hago algo con el error
      }
    );
  }
}
