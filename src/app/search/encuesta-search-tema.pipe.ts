import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'EncuestaSearchtema', pure: false })
export class EncuestaSearchtema implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(lista => {
        if (lista.tema) {
          return lista.tema.search(searchText) !== -1;
        }
      });
    }
  }
}
