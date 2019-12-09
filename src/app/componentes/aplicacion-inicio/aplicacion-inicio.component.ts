import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../servicios/usuario.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aplicacion-inicio',
  templateUrl: './aplicacion-inicio.component.html',
  styleUrls: ['./aplicacion-inicio.component.css']
})
export class AplicacionInicioComponent implements OnInit {
public identity;
  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.identity = usuarioService.getIdentity();
  }

  ngOnInit() {
    this.loadScript('./assets/assets/js/vartical-layout.min.js');
    this.loadScript('./assets/assets/js/script.js');
  }

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
      title: '¿Usted está Seguro?',
      text: 'cerrar su sección de trabajo activa',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Cerrar Sección',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.usuarioService.logout();
        this.router.navigate(['seguridad/inicio-seccion']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // accion de cuando se ejecuta el boton de cancelar
      }
    });
  }


}
