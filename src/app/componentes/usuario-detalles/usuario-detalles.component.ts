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
  public identity: Usuario;
  @Output() message = new EventEmitter<string>();

  @Output() messageEvent = new EventEmitter<string>();
  constructor(activateRoute: ActivatedRoute, private dataService: ActVarPageService, private userService: UsuarioService) {
    this.valorId = activateRoute.snapshot.params.id;
    this.dataService.updateData('Detalles del usuario seleccionado');
  }

  ngOnInit() {
    this.usuario = this.userService.getIdentity();
    this.getUsuario();
  }
  getUsuario() {
    this.userService.getUser(this.valorId).subscribe(
      response => {
        console.log(response)
        if ( !response) {
          // existe un error hay que manejarlo
        } else {
          this.usuario = response.usuario;
        }
      },
      error => {
        // hago algo con el error
      }
    );
    console.log(this.usuario);
  }

}
