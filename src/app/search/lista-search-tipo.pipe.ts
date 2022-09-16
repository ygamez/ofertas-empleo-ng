import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ListaSearchTipo', pure: false })
export class ListaSearchTipo implements PipeTransform {
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
