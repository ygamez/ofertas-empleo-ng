import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { AuthResponse } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    /* *{
      margin: 15px;
    } */
    .container{
      margin: 10px
    }

    .mat-sidenav {
    width: 300px;
    color:         
    }
    
    `
  ]
}) 
export class HomeComponent {

  get usuario (){
    return { ...this.authServise.usuario };
  }


  constructor( private router: Router,
               private authServise: AuthService  ) { }

  

  logout(){
    this.router.navigateByUrl( '/auth/' );
  }

}
