import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'EncuestaSearchempieza', pure: false })
export class EncuestaSearchempieza implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(lista => {
        if (lista.start_at) {
          return lista.start_at.search(searchText) !== -1;
        }
      });
    }
  }
}
