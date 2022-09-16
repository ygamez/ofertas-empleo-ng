import { Component, Input,  } from '@angular/core';
import { CurriculoResponse } from '../../interfaces/curriculo.interface';

@Component({
  selector: 'app-curriculo-targeta',
  templateUrl: './curriculo-targeta.component.html',
  styles: [
    `
    .example-card {
      /* max-width: 400px; */
      margin-bottom: 8px;
    }
   
    `
     ]

})
export class CurriculoTargetaComponent{

@Input() curriculo!: CurriculoResponse ;  

}
