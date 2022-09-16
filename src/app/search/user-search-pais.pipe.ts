import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchPais', pure: false })
export class UserSearchPais implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(user => {
        if (user.pais) {
          return user.pais.search(searchText) !== -1;
        }
      });
    }
  }
}
