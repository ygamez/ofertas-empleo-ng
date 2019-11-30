import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActVarPageService} from '../../servicios/act-var-page.service';
import {Usuario} from '../../modelos/usuario.model';
import {UsuarioService} from '../../servicios/usuario.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {
  public formGroup: FormGroup;
  public usuario: Usuario;
  public valorId = '';
  submitted = false;
  constructor(activateRoute: ActivatedRoute, private dataService: ActVarPageService, private formBuilder: FormBuilder, private userService: UsuarioService) {
    this.dataService.updateData('Editar el usuario seleccionado');
    this.valorId = activateRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getUsuario(this.valorId);
  }
  getUsuario(id) {
    this.userService.getUser(id).subscribe(
      response => {
        if ( !response) {
          // existe un error hay que manejarlo
        } else {
          this.usuario = response;
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
      name: [this.usuario.nombre, Validators.required],
      email: [this.usuario.email, [
        Validators.required, Validators.email
      ]],
      imagen: [this.usuario.imagen],
      role: [this.usuario.role, Validators.required],
    });
  }

  public register() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formGroup.invalid) {
      //
    }
    const user = this.usuario
    user.nombre = this.formGroup.get('name').value;
    user.email = this.formGroup.get('email').value;
    user.role = this.formGroup.get('role').value;
    user.updatedAt = new Date().toString();
    this.userService.updateUser(user).subscribe(
      response => {
        if ( response.usuario && response.usuario.id) {
          this.usuario = response.usuario;
        } else {
          // tratamiento de errores
        }
      },
      error => {
        // console.log(<any>error);
      }
    );
  }
  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
  // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }



}
