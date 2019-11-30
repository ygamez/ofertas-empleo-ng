import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActVarPageService {
  private dataObs$ = new Subject<string>();

  getData() {
    return this.dataObs$;
  }

  updateData(data: string) {
    this.dataObs$.next(data);
  }
}
