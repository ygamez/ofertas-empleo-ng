import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'EncuestaSearchName', pure: false })
export class EncuestaSearchName implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(lista => {
        if (lista.titulo) {
          return lista.titulo.search(searchText) !== -1;
        }
      });
    }
  }
}
