import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ActVarPageService} from '../../servicios/act-var-page.service';
import {Usuario} from '../../modelos/usuario.model';
import {UsuarioService} from '../../servicios/usuario.service';

@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html',
  styleUrls: ['./usuario-detalles.component.css']
})
export class UsuarioDetallesComponent implements OnInit {
  public valorId = '';
  public usuario: Usuario;
  @Output() message = new EventEmitter<string>();

  @Output() messageEvent = new EventEmitter<string>();
  constructor(activateRoute: ActivatedRoute, private dataService: ActVarPageService, private userService: UsuarioService) {
    this.valorId = activateRoute.snapshot.params.id;
    this.dataService.updateData('Detalles del usuario seleccionado');
  }

  ngOnInit() {
    this.getUsuario(this.valorId);
  }
  getUsuario(id) {
    this.userService.getUser(id).subscribe(
      response => {
        if ( !response) {
          // existe un error hay que manejarlo
        } else {
          this.usuario = response;
        }
      },
      error => {
        // hago algo con el error
      }
    );
  }

}
