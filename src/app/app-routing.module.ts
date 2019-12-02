import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeguridadInicioComponent} from './componentes/seguridad-inicio/seguridad-inicio.component';
import {SeguridadLoginComponent} from './componentes/seguridad-login/seguridad-login.component';
import {SeguridadResetPasswordComponent} from './componentes/seguridad-reset-password/seguridad-reset-password.component';
import {AplicacionInicioComponent} from './componentes/aplicacion-inicio/aplicacion-inicio.component';
import {NotFoundComponent} from './componentes/not-found/not-found.component';
import {UsuarioInicioComponent} from './componentes/usuario-inicio/usuario-inicio.component';
import {UsuarioAdminComponent} from './componentes/usuario-admin/usuario-admin.component';
import {UsuarioDetallesComponent} from './componentes/usuario-detalles/usuario-detalles.component';
import {UsuarioEditarComponent} from './componentes/usuario-editar/usuario-editar.component';
import {CategoriaInicioComponent} from './componentes/categoria-inicio/categoria-inicio.component';
import {CategoriaAdminComponent} from './componentes/categoria-admin/categoria-admin.component';
import {CursoInicioComponent} from './componentes/curso-inicio/curso-inicio.component';
import {CursoAdminComponent} from './componentes/curso-admin/curso-admin.component';
import {CursoNuevoComponent} from './componentes/curso-nuevo/curso-nuevo.component';
import {CursoDetallesComponent} from './componentes/curso-detalles/curso-detalles.component';
import {CursoEditarComponent} from './componentes/curso-editar/curso-editar.component';
import {UsuarioGuardService} from './servicios/usuario-guard.service';
import {UsuarioRedictAutService} from './servicios/usuario-redict-aut.service';
import {UsuarioAdminAccessService} from './servicios/usuario-admin-access.service';
import {ReportesInicioComponent} from './componentes/reportes-inicio/reportes-inicio.component';


const routes: Routes = [
  {
    path: 'seguridad', component: SeguridadInicioComponent, canActivate: [UsuarioRedictAutService],
    children: [
      { path: 'inicio-seccion', component: SeguridadLoginComponent, },
      { path: 'reset-contrasenna', component: SeguridadResetPasswordComponent },
    ]
  },
  {
    path: '', component: AplicacionInicioComponent, canActivate: [UsuarioGuardService],
    children: [
      {
        path: 'configuracion/usuario', component: UsuarioInicioComponent, canActivate: [UsuarioGuardService, UsuarioAdminAccessService],
        children: [
          { path: '', component: UsuarioAdminComponent, },
          { path: 'detalles/:id', component: UsuarioDetallesComponent, },
          { path: 'editar/:id', component: UsuarioEditarComponent, },
        ]
      },
      {
        path: 'configuracion/categoria', component: CategoriaInicioComponent,
        children: [
          { path: '', component: CategoriaAdminComponent, },
          { path: 'detalles/:id', component: UsuarioDetallesComponent, },
          { path: 'editar/:id', component: UsuarioEditarComponent, },
        ]
      },
      {
        path: 'curso', component: CursoInicioComponent,
        children: [
          { path: '', component: CursoAdminComponent, },
          { path: 'detalles/:id', component: CursoDetallesComponent, },
          { path: 'editar/:id', component: CursoEditarComponent, },
          { path: 'nuevo', component: CursoNuevoComponent, },
        ]
      },
      {path: 'reportes', component: ReportesInicioComponent},
    ]
  },
  {
    path: 'pagina-no-encontrada', component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'pagina-no-encontrada'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
