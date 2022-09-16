import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActVarPageService} from '../../servicios/act-var-page.service';
import {Usuario} from '../../modelos/usuario.model';
import {UsuarioService} from '../../servicios/usuario.service';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {
  public usuarioform: FormGroup;
  public formcontrol: FormControl;
  public usuario: Usuario;
  public imagenEncuestaFile: File;
  imagenSubir: File;
  imagenTemp: ArrayBuffer | string;
  public valorId = '';
  submitted = false;
  constructor(private router: Router, private dataService: ActVarPageService, activateRoute: ActivatedRoute,
              private formBuilder: FormBuilder, private userService: UsuarioService) {
    this.valorId = activateRoute.snapshot.params.id;
    this.getUsuario();
  }

  ngOnInit() {
    this.getUsuario();
  }
  getUsuario() {
    this.userService.getUser(this.valorId).subscribe(
      response => {
        if ( !response) {
          } else {
          this.usuario = response.usuario;
          this.buildForm();
          console.log(this.usuario);
          // this.formGroup.valueChanges.subscribe(val => {
          //   this.submitted = true;
          // });
          this.buildForm();
        }
      },
      error => {
        // hago algo con el error
      }
    );
  }

  private buildForm() {
    this.usuarioform = this.formBuilder.group({
      name: [this.usuario.nombre, Validators.required, Validators.maxLength(20)],
      edad: [this.usuario.apellidos, Validators.required],
      sexo: [this.usuario.email, Validators.required],
      nick: [this.usuario.tipousuario, Validators.required, Validators.maxLength(8)],
      email: [this.usuario.email, [Validators.required, Validators.email]],
      password: null,
      confirmPassword: null
    }, {validator: this.matchingPasswords('password', 'confirmPassword')});
    this.usuarioform.valueChanges.subscribe(val => {
          this.submitted = true;
    });
  }

  public register() {
    const identity = JSON.parse(localStorage.getItem('identity'));
    this.submitted = true;
    if (this.usuarioform.invalid) {}
    Swal.fire({
      title: '¿Usted está Seguro?',
      text: 'Actualizar usuario',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Si, Actualizar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
    if (this.usuarioform.value.password) {
    console.log('entro al primerif');
    const user = this.usuario;
    user.nombre = this.usuarioform.get('name').value;
    user.apellidos = this.usuarioform.get('edad').value;
    user.email = this.usuarioform.get('sexo').value;
    user.tipousuario = this.usuarioform.get('nick').value;
    user.email = this.usuarioform.get('email').value;
    user.password = this.usuarioform.get('password').value;

    this.userService.updateUser(user).subscribe(
      response => {
          this.userService.cambiarImagen(this.imagenSubir, 'user', response.user._id);
          console.log(this.imagenSubir);
          const usunop = new Usuario( 0, '', '', '', '', '', '', '', 0, '');
          localStorage.setItem('identity', JSON.stringify(user));
          this.notificacion('Usuario', ' actualizado correctamente', 'success');
      },
      error => {
      }
    );
    } else {
      console.log('elssssssssssseeeeeeeeeee');
      const user = this.usuario;
      user.nombre = this.usuarioform.get('name').value;
      user.apellidos = this.usuarioform.get('edad').value;
      user.email = this.usuarioform.get('sexo').value;
      user.tipousuario = this.usuarioform.get('nick').value;
      user.email = this.usuarioform.get('email').value;
      user.password = undefined;
      this.userService.updateUser(user).subscribe(
        response => {
          this.userService.cambiarImagen(this.imagenSubir, 'user', response.user._id);
          console.log(this.imagenSubir);
          localStorage.setItem('identity', JSON.stringify(user));
          this.notificacion('Usuario', ' actualizado correctamente', 'success');

          // tratamiento de errores

        },
        error => {
          // console.log(<any>error);
        }
      );
    }
    this.router.navigate(['/dashboard']);
  });
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.usuarioform.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

seleccionImage(archivo: File) {
// console.log('sisisi');
// if (!archivo) {
//       this.imagenSubir = null;
//       this.usuarioform.get('image').setValue(null);
//       return;
//     }

// if (archivo.type.indexOf('image') < 0) {
//       this.imagenSubir = null;
//       alert('no es imagen el archivo');
//       this.usuarioform.get('image').setValue(null);
//       return;
//     }


// const reader = new FileReader();
// this.imagenSubir = archivo;
// const urlImagenTemp = reader.readAsDataURL(archivo);
// reader.onloadend = () => this.imagenTemp = reader.result;
//   }
if (!archivo) {
  this.imagenEncuestaFile = null;
  console.log(this.usuarioform);
  this.usuarioform.get('image').setValue(null);
  console.log('no archivo');
  return;
}
if (archivo.type.indexOf('image') < 0) {
  this.imagenEncuestaFile = null;
  alert('no es imagen el archivo');
  console.log('si archivo');
  this.usuarioform.get('image').setValue(archivo);
  return;
}
const reader = new FileReader();
reader.onload = (e: any) => {
  this.imagenSubir = archivo;
  this.usuarioform.get('image').setValue(e.target.result);
};
const urlImagenTemp = reader.readAsDataURL(archivo);
reader.onloadend = () => this.imagenTemp = reader.result;
reader.readAsDataURL(archivo);
console.log(archivo);
}









  cambiarImagenEncuesta(archivo: File) {
    if (!archivo) {
      this.imagenEncuestaFile = null;
      this.usuarioform.get('imag').setValue(null);
      return;
    }
    if (archivo.type.indexOf('imag') < 0) {
      this.imagenEncuestaFile = null;
      alert('no es imagen el archivo');
      this.usuarioform.get('imag').setValue(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagenEncuestaFile = archivo;
      this.usuarioform.get('imag').setValue(e.target.result);
    };
    reader.readAsDataURL(archivo);
  }
  // convenience getter for easy access to form fields
  get f() { return this.usuarioform.controls; }


  public matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const password = group.controls[passwordKey];
      const passwordConfirmation = group.controls[passwordConfirmationKey];
      if (password.value !== passwordConfirmation.value) {
        return passwordConfirmation.setErrors({mismatchedPasswords: true});
      }
    };
  }

  public notificacion(titulo: string, mensage: string, type: string) {
    $.growl({
      title: titulo,
      message: mensage,
      url: ''
    }, {
      element: 'body',
      type,
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

}
