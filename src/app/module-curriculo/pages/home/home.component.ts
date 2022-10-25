import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { CurriculoService } from '../../services/curriculo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
  /* .container{
      margin: 10px
    }

    .mat-sidenav {
    width: 300px;
    color:         
    } */
    
  `]
})
export class HomeComponent {

  get usuario (){
    return { ...this.authServise.usuario };
  }

  // get curriculo (){
  //   return { ...this.curriculoServise.getCurriculos() }
  // }


  constructor(
    private router: Router,
    private authServise: AuthService,
    private curriculoServise: CurriculoService  
    ) { }

  atras() {
    this.router.navigateByUrl('');
  }

}
