import { Component, Input,  } from '@angular/core';
import { CurriculoResponse } from '../../interfaces/curriculo.interface';

@Component({
  selector: 'app-curriculo-targeta',
  templateUrl: './curriculo-targeta.component.html',
  styles: [
    `
              .container{
            display: flex;
            flex-wrap: wrap;
            padding: 10px;
            background-color: #FFF;
            justify-content: center;
            background: rgb(255,255,255);
            background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(199,201,221,1) 35%, rgba(220,223,230,1) 100%); 
          }

          .lateral{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            flex-basis: 25%;
            text-align: center;
            background-color: #1F497D;  
            color: #FFF;
            border: 1px solid #000;
            border-right: 0;
          }


                      .centro{
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                flex-basis: 50%;
                text-align: center;
                border: 1px solid #000;
                border-left: 0;
                background-color: #FFF;
            }

            @media(max-width: 2560px){
                .lateral{
                    flex-basis: 10%;
                }
                .centro{
                    flex-basis: 30%;
                }
            }
          
          .example-card {
                /* max-width: 400px; 
                margin-bottom: 8px;*/
              }

              @media(max-width: 1024px){
            .lateral{
                flex-basis: 30%;
            }
   
    `
     ]

})
export class CurriculoTargetaComponent{

@Input() curriculo!: CurriculoResponse ;  

}
