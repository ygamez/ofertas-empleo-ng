import { Component, OnInit } from '@angular/core';
import {ActVarPageService} from '../../servicios/act-var-page.service';

@Component({
  selector: 'app-usuario-inicio',
  templateUrl: './usuario-inicio.component.html',
  styleUrls: ['./usuario-inicio.component.css']
})
export class UsuarioInicioComponent implements OnInit {
  descripcion = 'Administrar Usuarios';
  constructor(private dataService: ActVarPageService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.descripcion = data;
    });
  }
}
