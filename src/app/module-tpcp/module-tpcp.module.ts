import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TpcpRoutingModule } from './tpcp-routing.module';
import { ModuleMarerialModule } from '../module-marerial/module-marerial.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    ProyectoComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    TpcpRoutingModule,
    ModuleMarerialModule
  ]
})
export class ModuleTpcpModule { }
