import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActVarPageService} from '../../servicios/act-var-page.service';
import {CursoService} from '../../servicios/curso.service';
import {Curso} from '../../modelos/curso.model';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-curso-nuevo',
  templateUrl: './curso-nuevo.component.html',
  styleUrls: ['./curso-nuevo.component.css']
})
export class CursoNuevoComponent implements OnInit {
  public curso: Curso;
  public formGroup: FormGroup;
  submitted = false;
  constructor(private router: Router, private dataService: ActVarPageService, private formBuilder: FormBuilder, private cursoService: CursoService) {
    this.curso = new Curso(null, '', '',
      '', '', '' , '', '', '', '', new Date().toString(), new Date().toString());
    this.buildForm();
  }

  ngOnInit() {
    this.dataService.updateData('Nuevo Curso');
    this.formGroup.valueChanges.subscribe(val => {
      this.submitted = true;
    });
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
    this.curso.id = 0;
    this.curso.nombre = this.formGroup.get('nombre').value;
    this.curso.area_conocimiento = this.formGroup.get('area_conocimiento').value;
    this.curso.anno_academico = this.formGroup.get('anno_academico').value;
    this.curso.profesor_principal = this.formGroup.get('profesor_principal').value;
    this.curso.tipo_curso = this.formGroup.get('tipo_curso').value;
    this.curso.otro_profesor = this.formGroup.get('otro_profesor').value;
    this.curso.descripcion = this.formGroup.get('descripcion').value;
    this.curso.correo_contaco = this.formGroup.get('correo_contaco').value;
    this.curso.estado = 'false';
    this.cursoService.newCurso(this.curso).subscribe(
      response => {
        if ( response.curso && response.curso.nombre) {
          this.curso = response.curso;
          this.router.navigate(['curso']);
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
