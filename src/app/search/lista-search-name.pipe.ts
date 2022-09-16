import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ListaSearchName', pure: false })
export class ListaSearchName implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(lista => {
        if (lista.nombre) {
          return lista.nombre.search(searchText) !== -1;
        }
      });
    }
  }
}
