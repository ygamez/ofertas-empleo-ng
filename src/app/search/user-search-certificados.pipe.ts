import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchCertificados', pure: false })
export class UserSearchCertificados implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = args;
    if (value) {
      return value.filter(user => {
        if (searchText !== null) {
          if (searchText) {
            return user.certificado;
          } else {
            return true;
          }
        }
      });
    }
  }
}
