import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  names: Array<string> = new Array();

  constructor() {}

  setNames(name: any) {
    this.names.push(name);
  }

  getNames(): Array<string> {
    return this.names;
  }
}
