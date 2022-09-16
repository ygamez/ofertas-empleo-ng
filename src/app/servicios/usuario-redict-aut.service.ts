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

    if (!identity && (identity.rol != 'USER_ROLE' || identity.rol != 'ADMIN_ROLE')) {
      this.router.navigate(['']);

      return false;
    } else {
      return true;
    }
  }
}
