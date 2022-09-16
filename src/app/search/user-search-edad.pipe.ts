import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchEdad', pure: false })
export class UserSearchEdad implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(user => {
        if (user.edad) {
          return user.edad.toString().search(searchText) !== -1;
        }
      });
    }
  }
}
