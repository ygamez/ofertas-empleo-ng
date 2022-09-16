import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchCuidad', pure: false })
export class UserSearchCuidad implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(user => {
        if (user.ciudad) {
          return user.ciudad.search(searchText) !== -1;
        }  });
    }
  }
}
