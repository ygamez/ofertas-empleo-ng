import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../servicios/usuario.service';
import {Router} from '@angular/router';

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
    this.usuarioService.logout();
    this.router.navigate(['seguridad/inicio-seccion']);
  }


}
