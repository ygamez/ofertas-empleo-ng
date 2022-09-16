import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ListasSearchCertificados', pure: false })
export class ListasSearchCertificados implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = args;
    if (value) {
      return value.filter(lista => {
        if (searchText !== null) {
          if (searchText) {
            return lista.certificado;
          } else {
            return true;
          }
        }
      });
    }
  }
}
