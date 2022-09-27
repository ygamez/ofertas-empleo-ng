import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../../services/curriculo.service';
import { CurriculoResponse } from '../../interfaces/curriculo.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { tr } from 'date-fns/locale';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  // styleUrls: ['./curriculo.component.css']
  styles: [
`
/* .example-card {
  max-width: 400px;
}

.example-header-image {
  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
  background-size: cover;
} */
`

  ]
})
export class CurriculoComponent implements OnInit {
 
  curriculo:         CurriculoResponse ;
  haycurriculo : boolean = false;

  // get curriculo (){
  //   return { ...this.curriculos };
  //  }

  constructor( private curriculoServises: CurriculoService,
               private authService : AuthService  ) { }

  ngOnInit():void {
    // this.haycurriculo = true;

    this.curriculoServises.getCurriculosXuser( this.authService.usuario.id )
        .subscribe( (curriculo) => {
            this.curriculo = curriculo
            console.log( curriculo );
          }, (err) =>{
            // this.haycurriculo = true;
          } );
          // (err) => {
          //   // this.haycurriculo = true;
          // });

  }

  msjhaycurriculo(): boolean{
    if( this.curriculo === null ){
      return true  
    } else
    return false
  }



}
