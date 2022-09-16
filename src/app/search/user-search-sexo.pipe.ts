import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchSexo', pure: false })
export class UserSearchSexo implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(user => {
        if (user.sexo) {
          return user.sexo.search(searchText) !== -1;
        }
      });
    }
  }
}
