import { Component, OnInit } from '@angular/core';
import {ActVarPageService} from '../../servicios/act-var-page.service';

@Component({
  selector: 'app-curso-inicio',
  templateUrl: './curso-inicio.component.html',
  styleUrls: ['./curso-inicio.component.css']
})
export class CursoInicioComponent implements OnInit {
  descripcion = 'Todos los Cursos Disponibles';
  constructor(private dataService: ActVarPageService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.descripcion = data;
    });
  }
}
