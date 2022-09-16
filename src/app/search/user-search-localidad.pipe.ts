import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchLocalidad', pure: false })
export class UserSearchLocalidad implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(user => {
        if (user.localidad) {
          return user.localidad.search(searchText) !== -1;
        }
      });
    }
  }
}
