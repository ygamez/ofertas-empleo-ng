import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeguridadInicioComponent} from './componentes/seguridad-inicio/seguridad-inicio.component';
import {SeguridadLoginComponent} from './componentes/seguridad-login/seguridad-login.component';
import {SeguridadResetPasswordComponent} from './componentes/seguridad-reset-password/seguridad-reset-password.component';
import {AplicacionInicioComponent} from './componentes/aplicacion-inicio/aplicacion-inicio.component';
import {NotFoundComponent} from './componentes/not-found/not-found.component';
import {UsuarioInicioComponent} from './componentes/usuario-inicio/usuario-inicio.component';
import {UsuarioDetallesComponent} from './componentes/usuario-detalles/usuario-detalles.component';
import {UsuarioEditarComponent} from './componentes/usuario-editar/usuario-editar.component';
import {CategoriaInicioComponent} from './componentes/categoria-inicio/categoria-inicio.component';
import {UsuarioGuardService} from './servicios/usuario-guard.service';
import {UsuarioRedictAutService} from './servicios/usuario-redict-aut.service';
import {UsuarioAdminAccessService} from './servicios/usuario-admin-access.service';
import {EvaluacionInicioComponent} from './componentes/evaluacion-inicio/evaluacion-inicio.component';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {UsuarioRegistroComponent} from './componentes/usuario-registro/usuario-registro.component';
import {PararutaidusuarioService} from './servicios/pararutaidusuario.service';


const routes: Routes = [
  {
    path: '', component: AplicacionInicioComponent,
    children: [
      { path: 'registro', component: UsuarioRegistroComponent, canActivate: [UsuarioAdminAccessService] },
      { path: 'inicio', component: InicioComponent},
      { path: 'misofertas', component: CategoriaInicioComponent,  },
      { path: 'configuracion/usuario', component: UsuarioInicioComponent, canActivate: [UsuarioGuardService],
        children: [
          { path: 'detalles/:id', component: UsuarioDetallesComponent, canActivate: [UsuarioGuardService] },
          { path: 'editar/:id', component: UsuarioEditarComponent, canActivate: [UsuarioGuardService]},
        ]
      },
      {path: 'curriculo', component: EvaluacionInicioComponent, canActivate: [UsuarioGuardService]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
