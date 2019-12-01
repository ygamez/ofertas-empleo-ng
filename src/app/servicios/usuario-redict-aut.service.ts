import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UsuarioService} from './usuario.service';

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

    if (identity && (identity.role === 'ROLE_OBSERVADOR' || identity.role === 'ROLE_ADMIN')) {
      this.router.navigate(['']);
      alert('Usted ya se encuatra autenticado no puede acceder a la pag de login');
      return false;
    } else {
      return true;
    }
  }
}
