import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {UsuarioService} from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuardService {
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
      return true;
    } else {
      this.router.navigate(['/seguridad/inicio-seccion']);
      return false;
    }
  }
}
