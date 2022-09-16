import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registro',
        component: RegistroComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      }
    ]
  }
]

@NgModule({
  declarations: [],

  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]

})
export class AuthRoutingModule { }
