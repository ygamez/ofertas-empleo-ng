import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ModuleMarerialModule } from '../module-marerial/module-marerial.module';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './pages/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ModuleMarerialModule,
    HttpClientModule,
    ReactiveFormsModule
  ]

})
export class AutModule { }
