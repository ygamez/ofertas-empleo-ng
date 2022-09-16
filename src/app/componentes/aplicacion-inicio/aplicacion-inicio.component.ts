import { Component, OnInit, ViewChild } from '@angular/core';
import {UsuarioService} from '../../servicios/usuario.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import {Usuario} from '../../modelos/usuario.model';
import * as jQuery from 'jquery';
import { TranslateService } from '@ngx-translate/core';
type Language = 'en' | 'es';
declare var $: any;
import {Dato} from '../../modelos/dato';
import {Encuesta} from '../../modelos/encuesta';
import {Pregunta} from '../../modelos/pregunta';
import {Solictud} from '../../modelos/solicitud';
import {Respuesta} from '../../modelos/respuesta';
import {ListaVotantes} from '../../modelos/lista-votantes.model';
import {Subscription} from 'rxjs';
import {EncuestaService} from '../../servicios/encuesta.service';
import {ListaVotantesService} from '../../servicios/lista-votantes.service';
import {CursoService} from '../../servicios/curso.service';
import {Curso} from '../../modelos/curso.model';
import {PageEvent} from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { variable } from '@angular/compiler/src/output/output_ast';
import {InicioComponent} from '../inicio/inicio.component'
// @ts-ignore
// @ts-ignore
const sha1 = require('sha1')

@Component({
  selector: 'app-aplicacion-inicio',
  templateUrl: './aplicacion-inicio.component.html',
  styleUrls: ['./aplicacion-inicio.component.css']
})

export class AplicacionInicioComponent implements OnInit {
  hide = false;
  public formagestionseleccionado;
  opcionSeleccionado: string;
  nivelescolarseleccionado: string;
  municipioseleccionado: string;
  municipiosolicitante:string;
  provinciasolicitante: string;
  salarioseleccionado: number;
  palabraseleccionado: string;
  emailsolicitante: string;
  provinciasolicintante:string;
  nivelescolarsolicitante:string;
  verSeleccion: string;
  public pageSize;
  private aux: Curso;
  public auxlista: ListaVotantes;
  public ticket:String
  public tickets:String
  panelOpenState = false;
  public encu: Encuesta;
  private nec: string;
  public usuario: Usuario;
  private encuestas: Encuesta[];
  private encuestasresultados: Encuesta[];
  private proximas: Encuesta[];
  private sincomenzar: Encuesta[];
  private preguntas: Pregunta[];
  private respuestas: Respuesta[];
  private listas: ListaVotantes[];
  private subscription: Subscription;
  public subscriptionpregunta: Subscription;
  public subscriptionrespuesta: Subscription[];
  private educacion: number;
  private politica: number;
  private salud: number;
  private deporte: number;
  private arte: number;
  private mayor: string;
  private mensajes: Curso[];
  public countries;
  public municipios;
  private posinicial;
  public ofertaslist;
  public identity;
  public datosusuario
  public dataSource; 
  public lastUpdated: Date;
  public formGroup: FormGroup;
  public formGroupsolicitudoferta: FormGroup;
  submitted = false;
  public token;			// --> token tras el login
  public  user: Usuario;
  public solicitud: Solictud;
  public error = '' ;
  public cargando = false;
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  length = 100;
  pageSizeOptions: number[] = [10, 20, 30, 40,50];
  elemento:PageEvent;
  pageEvent: PageEvent;
  constructor(private formBuilder: FormBuilder, private msjserv: CursoService, private usuarioService: UsuarioService, private router: Router, public encuestaservice: EncuestaService,
              public listaService: ListaVotantesService) {
    this.identity = usuarioService.getIdentity();
    this.lastUpdated = new Date();
    this.opcionSeleccionado = '0';
    this.provinciasolicitante = '0';
    this.municipiosolicitante='0';
    this.municipioseleccionado = '0';
    this.verSeleccion = '';
    this.ticket=''
    this.posinicial=0;

    this.buildForm();
    this.buildFormsolicitudoferta();
    this.user = new Usuario(null, '', '',
      '', '', '' , '',
       null, 0, '');
       this.solicitud = new Solictud( '', 0,
      0, 0, '' , '',
       null);
    this.proximas = [];
    this.encuestas = [];
    this.proximas = [];
    this.sincomenzar = [];
    this.dataSource =[];
    this.encuestasresultados = [];
    this.listas = [];
    this.respuestas = [];
    this.preguntas = [];
    this.subscriptionpregunta;
    this.subscriptionrespuesta = [];
    this.educacion = 0;
    this.politica = 0;
    this.mayor = '';
    this.aux = null;
    this.mensajes = [];
    this.nec = '';
    this.auxlista = null;
    this.countries = [];
    this.municipios = [];
    this.ofertaslist = [];
    this.pageEvent = this.elemento;
  
  }

  ngOnInit() {    
    this.loadScript('./assets/assets/js/vartical-layout.min.js');
    this.loadScript('./assets/assets/js/script.js');
    this.formGroup.valueChanges.subscribe(val => {
      this.submitted = true;
    });
    this.usuarioService.obternerprovincias().subscribe(valor => {
      valor.forEach(element => {
        this.countries.push(element);
      });
    });
  }
  ngOnDestroy() {
    this.subscriptionpregunta.unsubscribe();
    this.subscriptionrespuesta.forEach(cosa => {
      cosa.unsubscribe();
    });
  }

 
  seleccionarmunicipio(variable) {
    this.municipios = [];
    this.usuarioService.obternermunicipios(variable).subscribe(valor => {
      valor.forEach(element => {
        this.municipios.push(element);
      });
    });
    console.log(this.verSeleccion);
  }

  

  public estadoticket(ticket){
    this.usuarioService.obtenerticket(ticket).subscribe(value=>{
      this.tickets = value;
    })
    $('#consultarticket').modal('show');
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

  private buildFormsolicitudoferta() {
    this.formGroupsolicitudoferta = this.formBuilder.group({
      aptitudessolicitante: ['', Validators.required]

    });
  }

  
  public enviarsolicitud() {
    if (this.formGroupsolicitudoferta.invalid){
      return;
    }
    this.submitted = true;
    this.ticket=''
    this.solicitud.contenido = '';
    // stop here if form is invalid

    this.cargando = true;
    // this.solicitud.id=55;
    this.solicitud.email = this.usuarioService.getIdentity().email;
    this.solicitud.nombre = this.usuarioService.getIdentity().nombre;
    this.solicitud.nivelescolar_id = 3;
    this.solicitud.municipio_id = this.usuarioService.getDatosUsuario().municipio_id;
    this.solicitud.oferta_id = 25678
    this.solicitud.contenido = this.formGroupsolicitudoferta.get('aptitudessolicitante').value;
console.log('Cubaaaaaaa')
    console.log(this.solicitud)

    this.usuarioService.registrodesolicitudempleo(this.solicitud).subscribe(
      response => {
        this.ticket = response

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
    this.user.password = sha1(this.formGroup.get('password').value);
    this.usuarioService.loginget(this.user).subscribe(
      response => {
        this.identity = response;
        this.loadScript('./assets/assets/js/vartical-layout.min.js');
        this.loadScript('./assets/assets/js/script.js');

        if (this.identity) {
          this.usuarioService.logingetdatostodo(this.identity.id, this.identity.tipo_usuario).subscribe(
            response => {
              console.log(response)
              this.datosusuario = response;
           
          // Persistir datos del usuario en el LocalStorage
          console.log(this.datosusuario)
          localStorage.setItem('identity', JSON.stringify(this.identity));
          localStorage.setItem('datosusuario', JSON.stringify(this.datosusuario))
        });
          // Conseguir token
          this.getToken();

        } else {
          this.cargando = false;
          // this.status = 'error';
        }
      },
      error => {
        this.error = 'usuario o contraseña incorrectos';
        this.formGroup.reset();
        this.submitted = false;
        this.cargando = false;
      }
    );

  }
  // Método para conseguir el TOKEN al loguearse
  getToken() {
    this.usuarioService.loginget(this.user).subscribe(
      response => {
        this.token = JSON.stringify(response.token);

        if (this.token.length > 0) {

          // Persistir el token en el LocalStorage
          localStorage.setItem('token', this.token);
          this.lastUpdated = new Date();
          $('#sign-in').modal('hide');
          this.error = '';
          this.cargando = false;
          this.submitted = false;
        } else {
          this.cargando = false;
          // this.status = 'error';
        }
        
      },
      error => {
        // this.status = 'error';
        this.cargando = false;
        this.error = 'Su usuario o contraseña son incorrectos';
      }
      
    );
    this.ngOnInit();
  }


  // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }



  public loadScript(url: string) {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  public  cerrarSeccion() {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Desea cerrar sesión',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.usuarioService.logout();
        this.identity = null;
        window.location.reload()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // accion de cuando se ejecuta el boton de cancelar
      }
    });
  }

}
