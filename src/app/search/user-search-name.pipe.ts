import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchName', pure: false })
export class UserSearchName implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(user => {
        if (user.name) {
          return user.name.search(searchText) !== -1;
        } else {
          return user.nick.search(searchText) !== -1;
        }
      });
    }
  }
}
