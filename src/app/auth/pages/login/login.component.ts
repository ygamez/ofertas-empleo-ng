import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import Swal from "sweetalert2";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IconsModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent  {

  miFormulario: FormGroup = this.fb.group({
    email: ['stringRole@gmail.com', [Validators.required, Validators.email]],
    password: ['stringRole12345!', [Validators.required, Validators.minLength(6)]]
    // email: ['string'],
    // password: ['string']
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService,
              ) { }

    login (){        

      // this.authService.validarToken()
      //     .subscribe( resp => console.log( resp ));

      console.log(this.miFormulario.value);
      const { email, password } = this.miFormulario.value;

      this.authService.login( email, password )
      .subscribe( ok =>{
        // ok => console.log(ok)
        if ( ok === "true"  ){
          this.router.navigateByUrl('curriculo');
        }
        else {
          //TODO: mostrar msj de error
          Swal.fire('Revise', ok, 'error')
        }
      })
    }
    
    




    // this.authService.login( email, password  )
    // .subscribe( ok => {

    //   console.log( ok.error );
      
    //   if ( ok == true ){
    //     this.router.navigateByUrl('tpcp');
    //   }
    //   else{
    //     //TODO: Mostrar msj de error
    //     Swal.fire('Revise', 'Error en los datos' , 'error' );
    //   }        
    // });

  //----EJEMPLO DEL LOGIN---
  //------------------------

  // login( ) {

  //   //ir al bakend
  //   //un usuario (ir al servicio)
    
  //   this.authService.login()
  //   .subscribe( resp =>{
  //     console.log(resp);
      
  //     if( resp.id ){
  //       //esta navegacion tiene que ser condicional
  //       this.router.navigate( ['./tpcp'] );
  //     }
  //   })
  // }
  
}
