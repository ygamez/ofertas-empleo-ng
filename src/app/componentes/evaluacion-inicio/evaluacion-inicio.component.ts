// // me salia mal tuve q importar el css del calendar a mi style.css
import { OnInit } from '@angular/core';
import {EncuestaService} from '../../servicios/encuesta.service';
import {Encuesta} from '../../modelos/encuesta';
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-evaluacion-inicio',
  templateUrl: './evaluacion-inicio.component.html',
  styleUrls: ['./evaluacion-inicio.component.css'],
})
export class EvaluacionInicioComponent implements OnInit{
constructor() {

}

ngOnInit() {

}



}