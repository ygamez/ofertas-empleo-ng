import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeguridadInicioComponent } from './componentes/seguridad-inicio/seguridad-inicio.component';
import { SeguridadLoginComponent } from './componentes/seguridad-login/seguridad-login.component';
import { SeguridadResetPasswordComponent } from './componentes/seguridad-reset-password/seguridad-reset-password.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { AplicacionInicioComponent } from './componentes/aplicacion-inicio/aplicacion-inicio.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {MomentModule} from 'ngx-moment';
import {ReactiveFormsModule} from '@angular/forms';
import { UsuarioInicioComponent } from './componentes/usuario-inicio/usuario-inicio.component';
import { UsuarioAdminComponent } from './componentes/usuario-admin/usuario-admin.component';
import { UsuarioEditarComponent } from './componentes/usuario-editar/usuario-editar.component';
import { UsuarioDetallesComponent } from './componentes/usuario-detalles/usuario-detalles.component';
import {ActVarPageService} from './servicios/act-var-page.service';
import { CategoriaInicioComponent } from './componentes/categoria-inicio/categoria-inicio.component';
import { CategoriaAdminComponent } from './componentes/categoria-admin/categoria-admin.component';
import { CursoInicioComponent } from './componentes/curso-inicio/curso-inicio.component';
import { CursoAdminComponent } from './componentes/curso-admin/curso-admin.component';
import { CursoNuevoComponent } from './componentes/curso-nuevo/curso-nuevo.component';
import { CursoEditarComponent } from './componentes/curso-editar/curso-editar.component';
import { CursoDetallesComponent } from './componentes/curso-detalles/curso-detalles.component';
import {AuthInterceptorService} from './servicios/auth-interceptor.service';
import {UsuarioGuardService} from './servicios/usuario-guard.service';
import {UsuarioRedictAutService} from './servicios/usuario-redict-aut.service';

@NgModule({
  declarations: [
    AppComponent,
    SeguridadInicioComponent,
    SeguridadLoginComponent,
    SeguridadResetPasswordComponent,
    NotFoundComponent,
    AplicacionInicioComponent,
    UsuarioInicioComponent,
    UsuarioAdminComponent,
    UsuarioEditarComponent,
    UsuarioDetallesComponent,
    CategoriaInicioComponent,
    CategoriaAdminComponent,
    CursoInicioComponent,
    CursoAdminComponent,
    CursoNuevoComponent,
    CursoEditarComponent,
    CursoDetallesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    AppRoutingModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        m: 59
      }
    }),
    ReactiveFormsModule
  ],
  providers: [ActVarPageService,  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true } , UsuarioRedictAutService, UsuarioGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
