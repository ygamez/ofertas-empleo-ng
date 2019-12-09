import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from '../../servicios/usuario.service';
import {Usuario} from '../../modelos/usuario.model';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-seguridad-login',
  templateUrl: './seguridad-login.component.html',
  styleUrls: ['./seguridad-login.component.css']
})
export class SeguridadLoginComponent implements OnInit {
  public formGroup: FormGroup;
  submitted = false;
  public identity;		// --> usuario completo tras el login
  public token;			// --> token tras el login
  public  user: Usuario;
  public error = '' ;
  public cargando = false;
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
    this.buildForm();
    this.user = new Usuario(null, '', '',
    '', '', '' , '',
    new Date().toString(), new Date().toString(), '');
  }

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(val => {
      this.submitted = true;
    });
    // const thiss = this;
    $(document).keydown(function(tecla) {
      if (tecla.keyCode === 13) {
       // thiss.error = 'tuvo un error el sistema';
      // alert('presiono la tecla enter');
      }
    });
  }
  private buildForm() {
    this.formGroup = this.formBuilder.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', Validators.required],
      recordarme: [''],
    });
  }
  public login() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return;
    }
    this.cargando = true;

    this.user.email = this.formGroup.get('email').value;
    this.user.password = this.formGroup.get('password').value;

    this.usuarioService.login(this.user).subscribe(
      response => {
        this.identity = response.usuario;

        if (this.identity && this.identity.id) {

          // Persistir datos del usuario en el LocalStorage
          localStorage.setItem('identity', JSON.stringify(this.identity));

          // Conseguir token
          this.getToken();

        } else {
          this.cargando = false;
         // this.status = 'error';
        }
      },
      error => {
        this.error = error.error.message;
        if (error.error.tipo === '1') {
          this.formGroup.get('password').setValue('');
        }
        if (error.error.tipo === '2') {
          this.formGroup.reset();
        }
        this.submitted = false;
        this.cargando = false;
      }
    );
  }
  // Método para conseguir el TOKEN al loguearse
  getToken() {
    this.usuarioService.login(this.user, 'true').subscribe(
      response => {
        this.token = JSON.stringify(response.token);

        if (this.token.length > 0) {

          // Persistir el token en el LocalStorage
          localStorage.setItem('token', this.token);
          this.router.navigate(['']);
        } else {
          this.cargando = false;
         // this.status = 'error';
        }
      },
      error => {
        // this.status = 'error';
        this.cargando = false;
        console.log( <any> error);
      }
    );
  }
   // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }

}
