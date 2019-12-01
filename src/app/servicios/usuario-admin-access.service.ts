import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UsuarioService} from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAdminAccessService implements CanActivate {
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

    if (identity && (identity.role === 'ROLE_ADMIN')) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
