import { Component, OnInit } from '@angular/core';
import {Curso} from '../../modelos/curso.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ActVarPageService} from '../../servicios/act-var-page.service';
import {CursoService} from '../../servicios/curso.service';

@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css']
})
export class CursoEditarComponent implements OnInit {
  public curso: Curso;
  public formGroup: FormGroup;
  public valorId = '';
  submitted = false;
  constructor(activateRoute: ActivatedRoute, private router: Router, private dataService: ActVarPageService, private formBuilder: FormBuilder, private cursoService: CursoService) {
    this.dataService.updateData('Editar Curso Seleccionado');
    this.valorId = activateRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getCurso(this.valorId);
  }

  getCurso(id) {
    this.cursoService.getCurso(id).subscribe(
      response => {
        if ( !response) {
          // existe un error hay que manejarlo
        } else {
          this.curso = response;
          this.buildForm();
          this.formGroup.valueChanges.subscribe(val => {
            this.submitted = true;
          });
        }
      },
      error => {
        // hago algo con el error
      }
    );
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: [this.curso.nombre, Validators.required],
      area_conocimiento: [this.curso.area_conocimiento, Validators.required],
      anno_academico: [this.curso.anno_academico, Validators.required],
      profesor_principal: [this.curso.profesor_principal, Validators.required],
      tipo_curso: [this.curso.tipo_curso, Validators.required],
      correo_contaco: [this.curso.correo_contaco, [
        Validators.email
      ]],
      otro_profesor: [this.curso.otro_profesor],
      descripcion: [this.curso.descripcion, Validators.required]
    });
  }
  public register() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const curs = this.curso;
    curs.nombre = this.formGroup.get('nombre').value;
    curs.area_conocimiento = this.formGroup.get('area_conocimiento').value;
    curs.anno_academico = this.formGroup.get('anno_academico').value;
    curs.profesor_principal = this.formGroup.get('profesor_principal').value;
    curs.tipo_curso = this.formGroup.get('tipo_curso').value;
    curs.otro_profesor = this.formGroup.get('otro_profesor').value;
    curs.descripcion = this.formGroup.get('descripcion').value;
    curs.correo_contaco = this.formGroup.get('correo_contaco').value;
    this.cursoService.updateCurso(curs).subscribe(
      response => {
        if ( response.curso && response.curso.nombre) {
          this.curso = response.curso;
          this.router.navigate(['../../curso']);
        } else {
          // tratamiento de errores
        }
      },
      error => {
        // console.log(<any>error);
      }
    );
  }
  get f() { return this.formGroup.controls; }

}
