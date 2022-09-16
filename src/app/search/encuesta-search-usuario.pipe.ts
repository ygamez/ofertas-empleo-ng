import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'EncuestaSearchusuario', pure: false })
export class EncuestaSearchusuario implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(lista => {
        if (lista.usuarionombre) {
          return lista.usuarionombre.search(searchText) !== -1;
        }
      });
    }
  }
}
