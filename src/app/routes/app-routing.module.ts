import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidarTokenGuard } from '../guards/validar-token.guard';

import { ErrorPageComponent } from '../shared/error-page/error-page.component';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';

const routes: Routes = [
  {
    path: '',
    component: SidemenuComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then( m => m.AutModule )
  },
  {
    path: 'curriculo',
    loadChildren: () => import('../module-curriculo/module-curriculo.module').then( m => m.ModuleCurriculoModule ),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ] 
  },
  {
    path: 'tpcp',
    loadChildren: () => import('../module-tpcp/module-tpcp.module').then( m => m.ModuleTpcpModule ),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }
