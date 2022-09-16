import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Pipe} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';


// import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SeguridadInicioComponent } from './componentes/seguridad-inicio/seguridad-inicio.component';
import { SeguridadLoginComponent } from './componentes/seguridad-login/seguridad-login.component';
import { SeguridadResetPasswordComponent } from './componentes/seguridad-reset-password/seguridad-reset-password.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { AplicacionInicioComponent } from './componentes/aplicacion-inicio/aplicacion-inicio.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {MomentModule} from 'ngx-moment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsuarioInicioComponent } from './componentes/usuario-inicio/usuario-inicio.component';
import { UsuarioEditarComponent } from './componentes/usuario-editar/usuario-editar.component';
import { UsuarioDetallesComponent } from './componentes/usuario-detalles/usuario-detalles.component';
import {ActVarPageService} from './servicios/act-var-page.service';
import { CategoriaInicioComponent } from './componentes/categoria-inicio/categoria-inicio.component';
import {AuthInterceptorService} from './servicios/auth-interceptor.service';
import {UsuarioGuardService} from './servicios/usuario-guard.service';
import {UsuarioRedictAutService} from './servicios/usuario-redict-aut.service';
import { EvaluacionInicioComponent } from './componentes/evaluacion-inicio/evaluacion-inicio.component';
import {InicioComponent} from './componentes/inicio/inicio.component';
import { UsuarioRegistroComponent } from './componentes/usuario-registro/usuario-registro.component';
import {UserSearchName} from './search/user-search-name.pipe';
import {UserSearchSexo} from './search/user-search-sexo.pipe';
import {UserSearchCuidad} from './search/user-search-cuidad.pipe';
import {UserSearchLocalidad} from './search/user-search-localidad.pipe';
import {UserSearchPais} from './search/user-search-pais.pipe';
import {UserSearchEdad} from './search/user-search-edad.pipe';
import {UserSearchCertificados} from './search/user-search-certificados.pipe';
import {ListaSearchName} from './search/lista-search-name.pipe';
import {ListaSearchTipo} from './search/lista-search-tipo.pipe';
import {ListasSearchCertificados} from './search/lista-search-certificados.pipe';
import {EncuestaSearchName} from './search/encuesta-search-titulo.pipe';
import {EncuestaSearchestado} from './search/encuesta-search-estado.pipe';
import {EncuestaSearchtema} from './search/encuesta-search-tema.pipe';
import {EncuestaSearchusuario} from './search/encuesta-search-usuario.pipe';
import {EncuestaSearchempieza} from './search/encuesta-search-empieza.pipe';
import {EncuestaSearchCertificados} from './search/encuesta-search-certificada.pipe';
import {ListaSearchPropietario} from './search/lista-search-propietario.pipe';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {HttpClient} from '@angular/common/http';
import {ChartsModule, WavesModule, TooltipModule, MDBBootstrapModule} from 'angular-bootstrap-md';
// import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatStepperModule} from '@angular/material/stepper';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SeguridadInicioComponent,
    SeguridadLoginComponent,
    SeguridadResetPasswordComponent,
    NotFoundComponent,
    AplicacionInicioComponent,
    UsuarioInicioComponent,
    UsuarioEditarComponent,
    UsuarioDetallesComponent,
    CategoriaInicioComponent,
    EvaluacionInicioComponent,
    InicioComponent,
    UsuarioRegistroComponent,
    UserSearchName,
    UserSearchSexo,
    UserSearchCuidad,
    UserSearchLocalidad,
    UserSearchPais,
    UserSearchEdad,
    UserSearchCertificados,
    ListaSearchName,
    ListaSearchTipo,
    ListaSearchPropietario,
    ListasSearchCertificados,
    EncuestaSearchName,
    EncuestaSearchestado,
    EncuestaSearchtema,
    EncuestaSearchusuario,
    EncuestaSearchempieza,
    EncuestaSearchCertificados,
    ErrorPageComponent,
    SidemenuComponent
  ],
  imports: [
    CalendarModule,
    MatGridListModule,
    MatExpansionModule,
    MatDividerModule,
    MatToolbarModule,MatProgressSpinnerModule,
    BrowserModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSelectModule,
    MatStepperModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    SlimLoadingBarModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSidenavModule,

    CommonModule,
     // HttpModule,
    BrowserModule,
    ChartsModule, WavesModule, TooltipModule,
     MDBBootstrapModule.forRoot(),
     CalendarModule.forRoot({
       provide: DateAdapter,
       useFactory: adapterFactory,
     }),
    ReactiveFormsModule,
    FormsModule,
     NgxMaterialTimepickerModule,
     //----------YARIEL-----------
     //---------------------------

  ],
  providers: [
    ActVarPageService,  
    { provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService,
      multi: true 
    },
    UsuarioRedictAutService,
     UsuarioGuardService, 
     // DayService, WeekService, MonthService, WorkWeekService, MonthAgendaService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
