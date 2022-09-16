import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ActVarPageService} from '../../servicios/act-var-page.service';
import {Usuario} from '../../modelos/usuario.model';
import {UsuarioService} from '../../servicios/usuario.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.css']
})
export class UsuarioRegistroComponent implements OnInit {
  selected = 'Masculino';
  public usuario: Usuario;
  public formGroup: FormGroup;
  submitted = false;
  constructor(private router: Router, private dataService: ActVarPageService, private formBuilder: FormBuilder,
              private usuarioService: UsuarioService) {
    this.usuario = new Usuario(0, '', ''
      , '', '' , '', '', null, 0);
    this.buildForm();
  }

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(val => {
      this.submitted = true;
    });
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: [this.usuario.nombre, Validators.required, Validators.maxLength(20)],
      apellidos: [this.usuario.apellidos, Validators.required, Validators.maxLength(8)],
      email: [this.usuario.email, [
        Validators.email, Validators.required
      ]],
      tipousuario: [this.usuario.tipousuario, Validators.required],
      password: [this.usuario.password, Validators.required],
      confirmPassword: [this.usuario.password, Validators.required]

    }, {validator: this.matchingPasswords('password', 'confirmPassword')});
  }
  public register() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    this.usuario.nombre = this.formGroup.get('nombre').value;
    this.usuario.apellidos = this.formGroup.get('apellidos').value;
    this.usuario.email = this.formGroup.get('email').value;
    this.usuario.tipousuario = this.formGroup.get('tipousuario').value;
    this.usuario.password = this.formGroup.get('password').value;


    this.usuarioService.registro(this.usuario).subscribe(
      response => {
        console.log(response);
        if ( response.user && response.user._id) {
          console.log(response);
          this.usuario = response.user;
          this.router.navigate(['']);
          this.notificacion('Registro de Usuario...', 'se registró correctamente su nuevo usuario', 'success');
          $('#sign-in').modal('show');
        } else {
          // tratamiento de errores
        }
      },
      error => {
        this.notificacion('Registro de Usuario...', error.error.message, 'danger');
      }
    );
  }
  get f() { return this.formGroup.controls; }
  public notificacion(titulo: string, mensage: string, type: string) {
    $.growl({
      title: titulo,
      message: mensage,
      url: ''
    }, {
      element: 'body',
      type: type,
      allow_dismiss: true,
      placement: {
        from: 'top',
        align: 'right'
      },
      offset: {
        x: 30,
        y: 30
      },
      spacing: 10,
      z_index: 999999,
      delay: 2500,
      timer: 1000,
      url_target: '_blank',
      mouse_over: true,
      animate: {
        enter: 'animated fadeIn',
        exit: 'animated fadeOut'
      },
      icon_type: 'class',
    });
  }
  public matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const password = group.controls[passwordKey];
      const passwordConfirmation = group.controls[passwordConfirmationKey];
      if (password.value !== passwordConfirmation.value) {
        return passwordConfirmation.setErrors({mismatchedPasswords: true});
      }
    };
  }
}
