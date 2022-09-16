import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UsuarioService} from './usuario.service';
import {ActivatedRoute} from '@angular/router';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class PararutaidusuarioService implements CanActivate  {
  public valorId = '';
  
  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    activateRoute: ActivatedRoute,
    
  ) {

    
  }

  canActivate() {
    const identity = this.usuarioService.getIdentity();
    console.log(identity)
    console.log(this.valorId)
    if (identity._id === this.valorId) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
