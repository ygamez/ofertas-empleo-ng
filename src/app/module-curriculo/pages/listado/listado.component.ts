import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

      this.activatedRoute.params
          .subscribe( console.log )

  }

}
