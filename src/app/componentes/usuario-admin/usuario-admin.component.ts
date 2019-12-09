import { Component, OnInit } from '@angular/core';
import {ActVarPageService} from '../../servicios/act-var-page.service';
import 'moment/locale/es';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../../modelos/usuario.model';
import {UsuarioService} from '../../servicios/usuario.service';
import Swal from 'sweetalert2';
declare var $: any;


@Component({
  selector: 'app-usuario-admin',
  templateUrl: './usuario-admin.component.html',
  styleUrls: ['./usuario-admin.component.css'],
  providers  : [UsuarioService]
})
export class UsuarioAdminComponent implements OnInit {
  // usuarios: ILogro[];
  public $: any;
  public usuarios: Usuario[];
  public usuario: Usuario;
  public formGroup: FormGroup;
  submitted = false;
  public error = '' ;
  private lastUpdated: Date;
  constructor(private dataService: ActVarPageService, private formBuilder: FormBuilder, private userService: UsuarioService) {
    this.lastUpdated = new Date('2019/11/21 17:10:10');
    this.usuario = new Usuario(null, '', '',
      '', '', 'avatar.png' , 'true',
      new Date().toString(), new Date().toString(), '');
    this.buildForm();
  }

  ngOnInit() {
    this.dataService.updateData('Listado de todos los usuarios registrados en la aplicación');
    this.getUsuario();
    this.formGroup.valueChanges.subscribe(val => {
      this.submitted = true;
    });
  }
  getUsuarios(): Usuario[] {
    return[
      new Usuario(1, 'Yamir Miranda Veitia', 'yveitia@estudiantes.uci.cu',
        '', 'ROLE_ADMIN', 'avatar.png' , 'true',
        new Date().toString(), new Date('2019/02/15 17:10:10').toString(), ''),
      new Usuario(2, 'Natacha Veitia Samper', 'inversiones@caracol.tur.cu',
        '', 'ROLE_OBSERVADOR', 'avatar.png' , 'false',
        new Date().toString(), new Date('2019/11/21 17:10:10').toString(), '')
    ];
  }
  private buildForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    const name = 'Yamir Miranda Veitia';
    this.formGroup = this.formBuilder.group({
      name: [this.usuario.nombre, Validators.required],
      email: [this.usuario.email, [
        Validators.required, Validators.email
      ]],
      role: [this.usuario.role, Validators.required],
      password: [this.usuario.password, Validators.required],
    });
  }
  public register() {
          this.submitted = true;
          if (this.formGroup.invalid) {
            return;
          }
          // this.usuario.id = this.usuarios.length + 1;
          this.usuario.nombre = this.formGroup.get('name').value;
          this.usuario.email = this.formGroup.get('email').value;
          this.usuario.password = this.formGroup.get('password').value;
          this.usuario.role = this.formGroup.get('role').value;
          this.userService.registro(this.usuario).subscribe(
            response => {
              if ( response.usuario && response.usuario.id) {
                this.usuario = response.usuario;
                this.usuarios.push(this.usuario);
                this.formGroup.reset();
                this.error = '';
                this.formGroup.get('role').setValue('');
                this.submitted = false;
                $('#large-Modal').modal('hide');
                Swal.fire(
                  'Registrar Usuario',
                  'se registró correctamente el nuevo usuario',
                  'success'
                );
              } else {
               // tratamiento de errores
              }
            },
            error => {
              this.error = error.error.message;
            }
          );
  }
  get f() { return this.formGroup.controls; }
  eliminar(userId) {
    Swal.fire({
      title: '¿Usted está Seguro?',
      text: 'Eliminar el usuario selecionado de manera permanente',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.userService.deleteUser(userId).subscribe(
          response => {
            if ( response && response.id) {
              for (let i = 0; i < this.usuarios.length; i++) {
                if (this.usuarios[i].id === response.id) {
                  this.usuarios.splice(i, 1);
                  Swal.fire(
                    'Eliminar Usuario',
                    'Se eliminó correctamente',
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

  activo(userId) {
    for ( let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id === userId) {
        if (this.usuarios[i].status === 'true') {
          this.usuarios[i].status = 'false';
        } else {
          this.usuarios[i].status = 'true';
        }
        this.usuarios[i].updatedAt = new Date().toString();
      }
    }
  }
  getUsuario() {
    this.userService.getUsers().subscribe(
      response => {
        if ( !response) {
          // existe un error hay que manejarlo
        } else {
          this.usuarios = response;
        }
      },
      error => {
        // hago algo con el error
      }
    );
  }
}

