import { Component, Input, OnInit } from '@angular/core';
import { CurriculoResponse } from 'src/app/module-curriculo/interfaces/curriculo.interface';

@Component({
  selector: 'app-centro-inferior',
  templateUrl: './centro-inferior.component.html',
  styleUrls: ['./centro-inferior.component.css']
})
export class CentroInferiorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() curriculo!: CurriculoResponse ;  

}
