import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CurriculoComponent } from './pages/curriculo/curriculo.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children:[
      {
        path: 'curriculo',
        component: CurriculoComponent,
      },
      {
        path: 'curriculo',
        component: CurriculoComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'agregar',
        component: AgregarComponent,
      },
      {
        path: 'editar/:id',
        component: AgregarComponent,
      },
      {
        path: ':id',
        component: CurriculoComponent,
      },
      {
        path: '**',
        redirectTo: 'curriculo'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
})
export class ModuleCurriculoRoutingModule { }
