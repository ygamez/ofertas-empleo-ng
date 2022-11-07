import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { CurriculoComponent } from './pages/curriculo/curriculo.component';
import { CurriculoTargetaComponent } from './components/curriculo-targeta/curriculo-targeta.component';
import { HomeComponent } from './pages/home/home.component';
import { ModuleCurriculoRoutingModule } from './module-curriculo-routing.module';
import { ModuleMarerialModule } from '../module-marerial/module-marerial.module';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ListadoComponent } from './pages/listado/listado.component';
import { LateralComponent } from './components/targeta/lateral/lateral.component';
import { CentroSuperiorComponent } from './components/targeta/centro-superior/centro-superior.component';
import { CentroInferiorComponent } from './components/targeta/centro-inferior/centro-inferior.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent, 
    ConfirmarComponent, 
    CurriculoComponent, 
    CurriculoTargetaComponent, 
    HomeComponent, 
    ImagenPipe, 
    ListadoComponent, LateralComponent, CentroSuperiorComponent, CentroInferiorComponent, 
     ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule, 
    ModuleCurriculoRoutingModule,
    ModuleMarerialModule,
    ReactiveFormsModule,    
  ],
  entryComponents: [
    ConfirmarComponent,
  ],
})
export class ModuleCurriculoModule { }
