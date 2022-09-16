import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ListaSearchPropietario', pure: false })
export class ListaSearchPropietario implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(lista => {
        if (lista.creadorn) {
          return lista.creadorn.search(searchText) !== -1;
        }
      });
    }
  }
}
