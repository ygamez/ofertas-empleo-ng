import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'EncuestaSearchestado', pure: false })
export class EncuestaSearchestado implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(lista => {
        if (lista.estado) {
          return lista.estado.search(searchText) !== -1;
        }
      });
    }
  }
}
