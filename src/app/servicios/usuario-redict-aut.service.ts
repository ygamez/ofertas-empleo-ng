import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UsuarioService} from './usuario.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRedictAutService implements CanActivate {
  public url: string;
  public identity;
  public token;
  public stats;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  canActivate() {
    const identity = this.usuarioService.getIdentity();

    if (identity && (identity.role === 'ROLE_OBSERVADOR' || identity.role === 'ROLE_ADMIN' || identity.role === 'ROLE_EVALUADOR')) {
      this.router.navigate(['']);
      Swal.fire(
        'Acceso Restringido',
        'usted ya se encuatra autenticado por eso no puede acceder a la pagina de inicio de seccion',
        'error'
      );
      return false;
    } else {
      return true;
    }
  }
}
